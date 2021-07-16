# Ably OpenAPI documents

This repository contains [OpenAPI Specification v3](https://swagger.io/specification/) documents for the following Ably REST APIs:

- Platform API
- Control API

## Versions

Each OpenAPI document file name contains a version number. If a change is made that is breaking (that is, not backwards-compatible) Ably will create a new OpenAPI document. For example, Control API version one is in `control-v1.yaml`, but version two would be in `control-v2.yaml`. When you are viewing the contents of this repository locally, the latest version is displayed by default. To view older versions of the API reference, modify the files in the `openapi` folder to point to the version of the document that you would like to view.

## Installation

The following command installs the requirements (currently, only `http-server`):

```
npm install
```

## Viewing the API reference locally

To View the API reference locally, run:

```
npm start
```

Point your browser at http://localhost:8080. You can then select the API reference of your choice, rendered by [Redoc](https://github.com/Redocly/redoc).

## Validating the OpenAPI documents with Spectral

You can validate the OpenAPI documents with [Spectral](https://github.com/stoplightio/spectral).

To install Spectral:

```
npm install -g @stoplight/spectral
```

Or using Yarn:

```
yarn global add @stoplight/spectral
```

You can then validate your OpenAPI document as required. For example, on the command-line enter:

```
spectral lint control-v1.yaml
```

Spectral then lists any issues with the document.

## Quickstart

You can see the [quickstart guide](quickstart.md) in this repository, or refer to the [main documentation](https://ably.com/documentation).

A quick example request using Curl is shown here:

```
curl "https://control.ably.net/v1/accounts/<ACCOUNT_ID>/apps" \
     --header "Authorization: Bearer <ACCESS_TOKEN>" \
     --header "Accept: application/json"
```

1. Copy and paste your [account ID](https://ably.com/documentation/control-api#account-id) to `<ACCOUNT_ID>`.
2. Copy and paste your [access token](https://ably.com/documentation/control-api#authentication) to `<ACCESS_TOKEN>`.

Run the Curl command in your shell. You will receive back a list of your Ably applications.

## About Ably

[Ably](https://ably.com) is a pub/sub messaging platform with a suite of integrated services to deliver realtime experiences such as interactive learning, logistics GPS tracking, and live sports updates.

Find out more about at [ably.com](https://ably.com).
