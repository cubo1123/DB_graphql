CREATE TABLE units (
  id serial NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL
);
CREATE TABLE clients (
  id serial NOT NULL PRIMARY KEY,
  name varchar(50) NOT NULL,
  "lastName" varchar(50) NOT NULL,
  address varchar(100) NOT NULL,
  telephone varchar(30) NOT NULL,
  "creditAvailable" float(8) NOT NULL,
  "creditUsed" float(8) NOT NULL
);
CREATE TABLE providers (
  id serial NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL,
  telephone varchar(15) NOT NULL,
  address varchar(50) NOT NULL
);
CREATE TABLE schedules (
  id serial NOT NULL,
  start time NOT NULL,
  finish time NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE type_employees (
  id serial NOT NULL PRIMARY KEY,
  description varchar(30) NOT NULL,
  job varchar(30) NOT NULL
);
CREATE TABLE products (
  id serial NOT NULL,
  name varchar(30) NOT NULL,
  description varchar(30) NOT NULL,
  "onStock" float(8) NOT NULL,
  provider serial NOT NULL,
  unit serial NOT NULL,
  quantity float(8) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (provider) REFERENCES providers(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (unit) REFERENCES units(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE costs (
  id serial NOT NULL PRIMARY KEY,
  date timestamptz NOT NULL,
  value float(8) NOT NULL,
  product serial NOT NULL,
  FOREIGN KEY (product) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE prices (
  id serial NOT NULL,
  value float(8) NOT NULL,
  date timestamptz NOT NULL,
  product serial NOT NULL,
  FOREIGN KEY (product) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY(id)
);
CREATE TABLE employees (
  id serial NOT NULL,
  name varchar(30) NOT NULL,
  "lastName" varchar(50) NOT NULL,
  address varchar(100) NOT NULL,
  "typeEmployee" serial NOT NULL,
  schedule serial NOT NULL,
  "startDate" timestamptz NOT NULL,
  status varchar(30) NOT NULL,
  salary float(8) NOT NULL,
  "endDate" timestamptz,
  PRIMARY KEY(id),
  FOREIGN KEY("typeEmployee") REFERENCES type_employees(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY(schedule) REFERENCES schedules(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE notes (
  id serial NOT NULL,
  date timestamptz NOT NULL,
  client serial NOT NULL,
  employee serial NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (client) REFERENCES clients(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (employee) REFERENCES employees(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE note_contains (
  id serial NOT NULL,
  quantity double precision NOT NULL,
  unit serial NOT NULL,
  product serial NOT NULL,
  note serial NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (unit) REFERENCES units(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (product) REFERENCES products(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (note) REFERENCES notes(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE orders (
  id serial NOT NULL,
  provider serial NOT NULL,
  "createdAt" timestamptz NOT NULL,
  "arrivedAt" timestamptz,
  PRIMARY KEY(id),
  FOREIGN KEY (provider) REFERENCES providers(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE order_contains (
  id serial NOT NULL,
  product serial NOT NULL,
  "belongTo" serial NOT NULL,
  unit serial NOT NULL,
  quantity float(8) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (product) REFERENCES products(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY ("belongTo") REFERENCES orders(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (unit) REFERENCES units(id) ON UPDATE CASCADE ON DELETE RESTRICT
);