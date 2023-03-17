create table monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);

create table hobbitats(
    id serial, 
    name character varying(50),
    climate character varying(50),
    temperature init
);

create table lives(
    monsters: character varying(50),
    habitat character varying(50),
);

insert into monsters(name, personality)
values
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');


insert into hobbitats(name, climate, temperature)
values
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

insert into lives(name, habitat)
values
('Fluffy', 'desert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');
