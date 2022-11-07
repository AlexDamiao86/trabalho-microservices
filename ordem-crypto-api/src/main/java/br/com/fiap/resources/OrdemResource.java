package br.com.fiap.resources;

import br.com.fiap.dto.CreateOrdemDTO;
import br.com.fiap.entities.Ordem;
import io.quarkus.hibernate.reactive.panache.Panache;
import io.quarkus.panache.common.Sort;
import io.smallrye.mutiny.Uni;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.UUID;
import org.jboss.logging.Logger;

@Path("ordem")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OrdemResource {

    private static final Logger LOGGER = Logger.getLogger(OrdemResource.class.getName());

    @Channel("ordem-recebida")
    Emitter<String> ordemRecebidaEmitter;

    @GET
    public Uni<List<Ordem>> get() {
        return Ordem.listAll(Sort.by("codigoCriptomoeda"));
    }

    @GET
    @Path("{id}")
    public Uni<Ordem> getSingle(UUID id) {
        return Ordem.findById(id);
    }

    @GET
    @Path("{codigoCriptomoeda}")
    public Uni<List<Ordem>> getByCodigoCriptomoeda(String codigoCriptomoeda) {
        return Ordem.list("codigoCriptomoeda", codigoCriptomoeda, Sort.by("createdAt"));
    }

    @POST
    public Uni<Response> create(CreateOrdemDTO ordemDTO) {
        if (ordemDTO == null)
            throw new WebApplicationException("Informar ordem na requisição. Favor verificar requisição.", 422);
        if (ordemDTO.getTipo() == null)
            throw new WebApplicationException("Tipo de ordem deve ser 'COMPRA' ou 'VENDA'. Favor verificar requisição.", 422);
        if (ordemDTO.getCodigoCriptomoeda() == null)
            throw new WebApplicationException("Codigo da criptomoeda não informada. Favor verificar requisição.", 422);
        if (ordemDTO.getPrecoUnitarioCriptomoeda() == null)
            throw new WebApplicationException("Preço unitario da criptomoeda não informado. Favor verificar requisição", 422);
        if (ordemDTO.getQuantidadeCriptomoeda() == null)
            throw new WebApplicationException("Quantidade de criptomoedas não informado. Favor verificar requisição.", 422);

        UUID uuid = UUID.randomUUID();
        ordemRecebidaEmitter.send(uuid.toString());
        LOGGER.info("Evento 'ordem-recebida' enviado: " + uuid.toString());

        Ordem ordem = new Ordem(uuid, ordemDTO);

        return Panache.withTransaction(ordem::persist)
                .replaceWith(Response.ok(ordem).status(Response.Status.CREATED)::build);
    }

    @DELETE
    @Path("{id}")
    public Uni<Response> delete(UUID id) {
        return Panache.withTransaction(() -> Ordem.deleteById(id))
                .map(deleted -> deleted
                        ? Response.ok().status(Response.Status.NO_CONTENT).build()
                        : Response.ok().status(Response.Status.NOT_FOUND).build());
    }
}
