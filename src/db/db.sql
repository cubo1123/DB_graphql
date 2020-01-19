CREATE TABLE "Contestants" (
  id serial NOT NULL PRIMARY KEY,
  name varchar(30) NOT NULL,
  description varchar(30) NOT NULL
);
CREATE TABLE "JudgeTypes" (
  id serial NOT NULL PRIMARY KEY,
  kind varchar(10) NOT NULL
);
CREATE TABLE "Judges" (
  judge varchar(10) NOT NULL,
  password varchar(30) NOT NULL,
  kind serial NOT NULL,
  PRIMARY KEY (judge),
  FOREIGN KEY (kind) REFERENCES "JudgeTypes"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "Events" (id serial NOT NULL, PRIMARY KEY (id));
CREATE TABLE "Participations" (
  id serial NOT NULL,
  contestant serial NOT NULL,
  event serial NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (contestant) REFERENCES "Contestants"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (event) REFERENCES "Events"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "Evaluations" (
  id serial NOT NULL,
  participation serial NOT NULL,
  judge varchar(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (participation) REFERENCES "Participations"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (judge) REFERENCES "Judges"(judge) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE "Results" (
  id serial NOT NULL,
  calification float(5) NOT NULL,
  description varchar(30) NOT NULL,
  timestamp timestamptz DEFAULT CURRENT_TIMESTAMP,
  event serial NOT NULL,
  contestant serial NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (event) REFERENCES "Events"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
  FOREIGN KEY (contestant) REFERENCES "Contestants"(id) ON UPDATE CASCADE ON DELETE RESTRICT
);