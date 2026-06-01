
create database igc;
use igc;
CREATE TABLE usuario (
  id INT AUTO_INCREMENT,
	nome VARCHAR(255),
	email VARCHAR(255),
	senha VARCHAR(255),
  PRIMARY KEY (id),
  UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE
);
CREATE TABLE jogo_no_catalogo (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) not null,
  descricao LONGTEXT null,
  links LONGTEXT null,
  imagem LONGTEXT null,
  tag VARCHAR(255) NOT NULL,
  ctdata DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  fkusuario INT NOT NULL,
  FOREIGN KEY (fkusuario)
  REFERENCES usuario (id)
  );
  
CREATE TABLE avaliacao (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo CHAR(1) NOT NULL,
    dtAvaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT NOT NULL,
    fkJogo INT NOT NULL,
    CONSTRAINT chkTipo
        CHECK (tipo IN ('L', 'D')),
    CONSTRAINT fkAvaliacaoUsuario
        FOREIGN KEY (fkUsuario)
        REFERENCES usuario(id),
    CONSTRAINT fkAvaliacaoJogo
        FOREIGN KEY (fkJogo)
        REFERENCES jogo_no_catalogo(id),
    CONSTRAINT ukUsuarioJogo
        UNIQUE (fkUsuario, fkJogo)
);