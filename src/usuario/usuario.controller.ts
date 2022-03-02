import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service'
import { Usuario } from './usuario.entity';
import { usuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { resultadoDto } from 'src/dto/resultado.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get('listar')
    async listar(): Promise<Usuario[]>{
        return this.usuarioService.listar();
    }

    @Post('cadastrar')
    async cadastrar(@Body() data: usuarioCadastrarDto): Promise<resultadoDto>{
    
      return this.usuarioService.cadastrar(data)
 
    }
}
