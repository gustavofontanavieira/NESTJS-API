import { Injectable, Inject } from '@nestjs/common';
import { resultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { usuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: usuarioCadastrarDto): Promise<resultadoDto>{

    //chama o objeto de usuario e atribui ao seus dados o que vai ser recebido através do data
    //ou seja conversa com a tabela e o dto.
    //dados da tabela = dados do dto (data transfer object)
    let usuario = new Usuario()
    usuario.email = data.email;
    usuario.nome = data.nome;
    usuario.password = data.senha;
    return this.usuarioRepository.save(usuario)
    .then((result) => {
        return <resultadoDto>{
            status: true,
            mensagem: "Usuário cadastrado com sucesso"
          }
    })
    .catch((error) => {
        return <resultadoDto>{
            status: false,
            mensagem: "Houve um erro ao cadastrar o usuário"
          }
    })
    
  }
}