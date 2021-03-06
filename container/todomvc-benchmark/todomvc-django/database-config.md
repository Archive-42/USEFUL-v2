# Postgres Configuration to deploy a Django app

- Install Postgres.

```shell
$ sudo apt-get install postgresql
```

- Login via `psql` using the `postgres` user.

```shell
$ psql -U postgres -d postgres
```

- Create a database and switch to the database.

```sql
psql> CREATE DATABASE todomvc_django;
psql> \c todomvc_django
```

- Create a user and grant him all privileges on the database.

```sql
psql> CREATE USER todomvc WITH ENCRYPTED PASSWORD 'mysupersecretpassword';
psql> GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO todomvc;
```
