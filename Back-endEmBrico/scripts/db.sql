CREATE DATABASE IF NOT EXISTS embrico;

USE embrico;

CREATE TABLE IF NOT EXISTS brico (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    primary key (id)
);

INSERT INTO brico (name, description) VALUES
('first_name', 'tounis'),
('last_name', 'tounssi')