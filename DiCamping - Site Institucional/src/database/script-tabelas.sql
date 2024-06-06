CREATE DATABASE dicamping;
USE dicamping;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE campings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_camping VARCHAR(255)
);

create table usuario_camping (
    fkUsuario int,
    fkCamping int,
    primary key (fkUsuario, fkCamping),
	foreign key (fkUsuario) references usuario(id),
	foreign key (fkCamping) references campings(id)
);


-- RANKING DE TIPO DE CAMPING INDICADOS
SELECT 'CAMPING SELVAGEM' AS tipo_camping, COUNT(*) AS quantidade
FROM campings
WHERE tipo_camping = 'CAMPING SELVAGEM'
UNION ALL
SELECT 'CAMPING ORGANIZADO' AS tipo_camping, COUNT(*) AS quantidade
FROM campings
WHERE tipo_camping = 'CAMPING ORGANIZADO'
UNION ALL
SELECT 'GLAMPING' AS tipo_camping, COUNT(*) AS quantidade
FROM campings
WHERE tipo_camping = 'GLAMPING';

-- TIPO DE CAMPING MAIS INDICADO
SELECT tipo_camping, COUNT(tipo_camping) AS quantidade
FROM campings
GROUP BY tipo_camping
ORDER BY quantidade DESC
LIMIT 1;

-- TIPO DE CAMPING MENOS INDICADO
SELECT tipo_camping, COUNT(tipo_camping) AS quantidade
        FROM campings
        GROUP BY tipo_camping
        ORDER BY quantidade ASC
        limit 1; -- Ordem ascendente para o menos selecionado

