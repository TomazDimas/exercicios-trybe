USE sakila;
SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
('Ana', 'Cristina', 2, 'ana@gmaikl.com', 1, 1, 'aninha', 'amarelo'),
('Paulo', 'Silva', 5, 'paulinho@gmaikl.com', 1, 1, 'pauloSilva', 'ceuazul');
SELECT * FROM staff;