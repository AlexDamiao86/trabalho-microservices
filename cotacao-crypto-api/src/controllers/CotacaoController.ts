import { Request, Response } from 'express';

class CotacaoController {
  async show(request: Request, response: Response) {
    // const ticker = await ReceiveTickerService.execute();
    // return response.json(ticker);
    return response.json({});
  }
}

export { CotacaoController };
