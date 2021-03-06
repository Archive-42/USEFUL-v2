# TodoMVC Backend Using Django Rest Framework

This project, is an implementation of the popular [TodoMVC](http://todomvc.com/) and a backend built using [Django Rest Framework](http://www.django-rest-framework.org/).

<hr />

## Quick Start

Getting the app to run is pretty easy, just clone the repo, install requirements, sync database and you're good to go.

```bash
# Clone the repo
$ git clone https://github.com/hasura/todomvc-benchmark.git

# Install requirements
$ pip install -U -r requirements.txt

# Sync database
$ ./manage.py migratre --run-syncdb

# Run the server
$ ./manage.py runserver
```

# Contributing

We really appreciate pull requests, so if you think there something missing, wrong or want to have something in the app, don't hesitate to send us a pull request.

# Credits

This app is directly stolen from AxiaCore (https://github.com/AxiaCore/todomvc-django)
and modified to add user authentication and access control.

The frontend of this app, is based on [TodoMVC](http://todomvc.com/), and the Django API, is based on the tutorial [Start your API](https://godjango.com/41-start-your-api-django-rest-framework-part-1/) from [GoDjango](https://godjango.com/).
