# Agile Engine Test Task

## Deploying locally

Clone the repository:

```sh
git clone https://github.com/Akulko/money-accounting-system
```

### Install dependencies:

Server:

```sh
cd ./money-accounting-system/server
npm install
```

Client:

```sh
cd ./money-accounting-system/client
npm install
```

Run the app:

```sh
npm start
```

## Usage

You can send requests via Postman or similar:

```sh
{
 "type": "credit", //credit or debit
 "amount": 12 // no negative values
}
```
