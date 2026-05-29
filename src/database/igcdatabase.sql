create database igc;
use igc;
CREATE TABLE usuario (
  id INT AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
  PRIMARY KEY (id),
  UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE
);
CREATE TABLE jogo_no_catalogo (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(100) not null,
  descricao LONGTEXT null,
  links VARCHAR(256) null,
  imagem VARCHAR(256) null,
  likes INT null,
  dislikes INT null,
  tag VARCHAR(45) NOT NULL,
  ctdata DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id));
CREATE TABLE historia (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  texto LONGTEXT NULL,
  ctdata DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id));
CREATE TABLE IF NOT EXISTS jogo_no_catalogo_has_usuario (
  fkcatalogo INT NOT NULL,
  fkusuario INT NOT NULL,
  PRIMARY KEY (fkcatalogo, fkusuario),
    FOREIGN KEY (fkcatalogo)
    REFERENCES jogo_no_catalogo (id),
    FOREIGN KEY (fkusuario)
    REFERENCES usuario (id)
);
CREATE TABLE historia_has_usuario (
  fkhistoria INT NOT NULL,
  fkusuario INT NOT NULL,
  PRIMARY KEY (fkhistoria, fkusuario),
    FOREIGN KEY (fkhistoria)
    REFERENCES historia (id),
    FOREIGN KEY (fkusuario)
    REFERENCES usuario (id)
);
CREATE TABLE comentario_jogos (
  id INT NOT NULL AUTO_INCREMENT,
  texto LONGTEXT NULL,
  ctdata DATETIME DEFAULT CURRENT_TIMESTAMP,
  likes INT NULL,
  dislikes INT NULL,
  fkcomentario INT NOT NULL,
  fkcatalogo INT NOT NULL,
  PRIMARY KEY (id),
    FOREIGN KEY (fkcomentario)
    REFERENCES comentario_jogos (id),
    FOREIGN KEY (fkcatalogo)
    REFERENCES jogo_no_catalogo (id)
);
CREATE TABLE comentario_historia (
  id INT NOT NULL AUTO_INCREMENT,
  texto LONGTEXT NULL,
  ctDATETIME DATETIME DEFAULT CURRENT_TIMESTAMP,
  likes INT NULL,
  dislikes INT NULL,
  fkcomentario INT NOT NULL,
  fkhistoria INT NOT NULL,
  PRIMARY KEY (id),
    FOREIGN KEY (fkcomentario)
    REFERENCES comentario_historia (id),
    FOREIGN KEY (fkhistoria)
    REFERENCES historia (id)
);
