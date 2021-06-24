# img-api-node

An image manipulation API, powered by express!

## Set-up

```
npm i
```

then

```
npm run start:dev
```

nodemon ^

while

```
node src/app.js
```

production ^

## Endpoints

**/api/v1**

### /rotate

rotates your image!

#### Queries

- image: Your target image url
- degrees: an integer that represents how much degrees you want to rotate the image

<br>

![](https://cdn.discordapp.com/attachments/743817386792058971/857459995867217970/rotate.png) \
180 degrees ^

### /negate

negates(?) your image!

#### Queries

- image: Your target image url

<br>

![](https://cdn.discordapp.com/attachments/743817386792058971/857462713381945344/negate.png)

### /blur

#### Queries

- image: Your target image url

<br>

![](https://cdn.discordapp.com/attachments/743817386792058971/857472063924338718/blur.png)
