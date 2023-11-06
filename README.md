# RickAndMorty Web Site 🛸

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

Web that allows you to search for your favorite **characters** and also to see the chapters and information that you may not know about your characters.

## Development server
👣 **Steps**
  - To clone the repository you only have to use this command
    ```bash
      git clone git@github.com:jarestrepot/rick-and-morty.git
    ```
     If the first clone does not work, try this command `git clone https://github.com/jarestrepot/rick-and-morty.git` <hr>
  - Access the folder `cd rick-and-morty` <hr>
  - Instala las depenecias que necesita la web para funcionar correctamente
     ```bash
        npm install
     ```
    <hr>
  - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.<hr>

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Demo ⬇️

[Click demo](https://rickwebsite-hacketon.netlify.app/)



## Views 🖼️
| Desktop or laptop | Tablet | Movil |
|----------|----------|----------|
|  ![ligth-desktop](https://github.com/jarestrepot/rick-and-morty/assets/102868557/e2981af2-a9b4-429b-8d51-a1e9cc01aaa1)  | ![table-dark](https://github.com/jarestrepot/rick-and-morty/assets/102868557/b980249b-62bf-4424-b73f-d577b23ae3bf)  | ![movil-dark](https://github.com/jarestrepot/rick-and-morty/assets/102868557/ff5a4d50-4027-4458-b357-c2cb109d9a09)   |


## Tech Stack ⚙️

**Client:** Angular, ngx-infinite-scroll, rxjs, TailwindCSS, Esbuild
**Server:** Node


## Documentation API 🚀

[Documentation](https://rickandmortyapi.com)

### API Reference
#### Get all characters

`
  GET https://rickandmortyapi.com/api/character
`

#### Get Multiple characters 

`
  https://rickandmortyapi.com/api/character/1,183
`

#### Get Location 

`
  https://rickandmortyapi.com/api/location
`

#### Get Location 

`
  https://rickandmortyapi.com/api/location
`

#### Get Obtain character detail

`
  https://rickandmortyapi.com/api/character/?name=${name}
`
## Color Reference


**Light Mode**

`
  'de-york': {
          '50': 'oklch(97.34% 0.01 152.61)',
          '100': 'oklch(93.74% 0.04 151.39)',
          '200': 'oklch(87.60% 0.06 153.39)',
          '300': 'oklch(79.14% 0.10 154.02)',
          '400': 'oklch(71.73% 0.12 153.95)',
          '500': 'oklch(60.01% 0.13 152.75)',
          '600': 'oklch(50.93% 0.11 153.35)',
          '700': 'oklch(43.62% 0.09 154.80)',
          '800': 'oklch(37.62% 0.08 155.06)',
          '900': 'oklch(33.09% 0.06 156.43)',
          '950': 'oklch(23.23% 0.04 157.52)',
        }
`

**Dark Mode**

`
  'malachite': {
          '50': 'oklch(98.21% 0.02 147.30)',
          '100': 'oklch(96.22% 0.06 145.83)',
          '200': 'oklch(92.50% 0.11 145.77)',
          '300': 'oklch(87.60% 0.18 145.01)',
          '400': 'oklch(81.07% 0.24 143.74)',
          '500': 'oklch(74.03% 0.24 143.18)',
          '600': 'oklch(64.39% 0.21 143.05)',
          '700': 'oklch(53.96% 0.17 143.22)',
          '800': 'oklch(45.79% 0.14 143.67)',
          '900': 'oklch(40.03% 0.12 144.20)',
          '950': 'oklch(27.01% 0.08 145.04)',
        }
`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
