FROM python:3.12.0-slim-bookworm

WORKDIR /app
RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y libpq-dev gcc
COPY ./webapi/requirements.txt .
RUN pip install -r requirements.txt

CMD ["gunicorn", \
    "--timeout=300", \
    "--log-level", "debug", \
    "--bind=0.0.0.0:5100", "app:app", \
    "--reload"]
