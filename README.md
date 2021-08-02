# serrated

[The sharp image manipulation Node.js module](https://www.npmjs.com/package/sharp) — turned to a web API

## Set-up

### Installation

```
npm i
```

### Starting the Web Servers

For development:

```
npm run start:dev
```

<br>

For production:

```
node src/app.js
```

## Endpoints

**/api/v1**

### /rotate

rotates your image!

#### Queries

- image: Your target image url
- degrees: an integer that represents how much degrees you want to rotate the image

<br>

<img src="https://cdn.discordapp.com/attachments/743817386792058971/857459995867217970/rotate.png" height="300px" />

180 degrees ^

### /negate

Produce the "negative" of the image

#### Queries

- image: Your target image url

<br>

<img src="https://cdn.discordapp.com/attachments/743817386792058971/857462713381945344/negate.png" height="300px" />

### /blur

Blurs the given image

#### Queries

- image: Your target image url
- sigma: a value between 0.3 and 500 representing the sigma of the Gaussian mask, where `sigma = 1 + radius / 2`.

<br>

<img src="https://cdn.discordapp.com/attachments/743817386792058971/857472063924338718/blur.png" height="300px" />
