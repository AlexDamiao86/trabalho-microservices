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

    @POST
    public Uni<Response> create(Ordem ordem) {
        if (ordem == null || ordem.getId() != null)
            throw new WebApplicationException("Id não deve ser informado. Alterar requisição.", 422);
        // if (ordemDTO.getCodigoCriptomoeda() == null)
        //  throw new WebApplicationException("Codigo da criptomoeda não informada. Favor verificar dados de requisição.", 422);

        LOGGER.info(ordem.getTipo());
        LOGGER.info(ordem.getCodigoCriptomoeda());

        UUID uuid = UUID.randomUUID();
        ordemRecebidaEmitter.send(uuid.toString());
        LOGGER.info("Evento 'ordem-recebida' enviado: " + uuid.toString());

        ordem.setId(uuid);
        // Ordem ordem = new Ordem(uuid, ordemDTO);

        return Panache.withTransaction(ordem::persist)
                .replaceWith(Response.ok(ordem).status(Response.Status.CREATED)::build);
    }
}
