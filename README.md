Скрипты для запуска проекта

Front:
Из директории idea/frontend запустить скрипт npm start

Back:
В директории idea/backend нужно создать файл ".env".
В нем нужно прописать:

PORT=4000
DATABASE_URL = 'postgres://<name_owner>:<password>@localhost:5432/<name_DB>'

Из директории idea/backend запустить npm run dbr для создания БД, моделей, миграций и засеивания базы. 
После запустить скрипт npm run dev

P.S.
В каждой директории(frontend/backend) необходимо прописать npm i для установки пакетов перед запуском.