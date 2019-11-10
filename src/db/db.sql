CREATE TABLE "Units" (
  id serial NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL
);
CREATE TABLE "Clients" (
  id serial NOT NULL PRIMARY KEY,
  name varchar(50) NOT NULL,
  "lastName" varchar(50) NOT NULL,
  address varchar(100) NOT NULL,
  telephone varchar(30) NOT NULL,
  "creditAvailable" float(8) NOT NULL,
  "creditUsed" float(8) NOT NULL
);
CREATE TABLE "Providers" (
  id serial NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL,
  telephone varchar(15) NOT NULL,
  address varchar(50) NOT NULL
);
CREATE TABLE "Schedules" (
  id serial NOT NULL,
  start time NOT NULL,
  finish time NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE "TypeEmployees" (
  id serial NOT NULL PRIMARY KEY,
  description varchar(30) NOT NULL,
  job varchar(30) NOT NULL
);
CREATE TABLE "Products" (
  id serial NOT NULL,
  name varchar(30) NOT NULL,
  description varchar(30) NOT NULL,
  "onStock" float(8) NOT NULL,
  provider serial NOT NULL,
  unit serial NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (provider) REFERENCES "Providers"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (unit) REFERENCES "Units"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "Costs" (
  id serial NOT NULL PRIMARY KEY,
  date timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  value float(8) NOT NULL,
  product serial NOT NULL,
  FOREIGN KEY (product) REFERENCES "Products"(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE "Prices" (
  id serial NOT NULL,
  value float(8) NOT NULL,
  date timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  product serial NOT NULL,
  FOREIGN KEY (product) REFERENCES "Products"(id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY(id)
);
CREATE TABLE "Employees" (
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
  FOREIGN KEY("typeEmployee") REFERENCES "TypeEmployees"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY(schedule) REFERENCES "Schedules"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "Notes" (
  id serial NOT NULL,
  date timestamptz DEFAULT CURRENT_TIMESTAMP,
  client serial NOT NULL,
  employee serial NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (client) REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (employee) REFERENCES "Employees"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "NoteContains" (
  id serial NOT NULL,
  quantity double precision NOT NULL,
  product serial NOT NULL,
  note serial NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product) REFERENCES "Products"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (note) REFERENCES "Notes"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "Orders" (
  id serial NOT NULL,
  provider serial NOT NULL,
  "createdAt" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "arrivedAt" timestamptz,
  PRIMARY KEY(id),
  FOREIGN KEY (provider) REFERENCES "Providers"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "OrderContains" (
  id serial NOT NULL,
  product serial NOT NULL,
  "belongTo" serial NOT NULL,
  quantity float(8) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (product) REFERENCES "Products"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY ("belongTo") REFERENCES "Orders"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);