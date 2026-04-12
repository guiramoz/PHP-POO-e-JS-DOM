<?php

class FormCurso{
    
    private $nome;
    private $email;
    private $senha;

    //-------------------------------------------
    public function getNome()
    {
        return $this->nome;
    }
    public function setNome($Nm)
    {
        $this->nome = $Nm;
    }
    //------------------------------------------------
    public function getEmail()
    {
        return $this->email;
    }
    public function setEmail($Em)
    {
        $this->email = $Em;
    }
    //------------------------------------------------
    public function getSenha()
    {
        return $this->senha;
    }
    public function setSenha($Sn)
    {
        $this->senha = $Sn;
    }


    //Metodo - Gravar os dados no Banco -------------
    public function Inserir()
    {
        include_once "Conexao.php";

        try {
            $Comando = $conexao->prepare("INSERT INTO aluno(nome,senha) VALUES (?, ?)");
            $Comando->execute([$this->nome, $this->senha]);

            $alunoId = $conexao->lastInsertId();

            $Comando = $conexao->prepare("INSERT INTO contato(id_aluno, email) VALUES (?, ?)");
            $Comando->execute([$alunoId, $this->email]);

            $Retorno = "Gravação com sucesso";
        } catch (PDOException $Erro) {
            $Retorno = "Erro: " . $Erro->getMessage();
        }

        return $Retorno;    
    }
    
}

