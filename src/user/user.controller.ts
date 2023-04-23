import { Body, Controller,Delete,Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('usuarios')
export class UserController {
    
    @Post()
   async crie(@Body()corpo){
        return{corpo}
    }
    
    
    @Get()
   async leiaTodos(){
        return{usuarios:[]}
    }

    @Get(':id')
   async leiaUm(@Param() parametro){
        return {usuario:{}, parametro}
    }

  @Put(':id')
  altereTodosOsDados(@Body() corpo, @Param() parametro){
    return {metodo:"Altera todos os dados do corpo da requisição",
             corpo,
             parametro}
  }

  @Patch(':id')
  async alteraDadosParcial(@Body() corpo, @Param() parametro){
    return {metodo: "Altera os dados parcial", 
    corpo, 
    parametro}
  }
 
  @Delete(':id')
 async deletar(@Param() parametro){
    return{parametro}
  }

}

