# Salary Calculator

## Objectives
Create, using React, an application named 'react-salario' that should be able to calculate the net salary from gross salary, considering the 2020 CLT rules.

## Techs

* Javascript
* Class Components
* React
* Materialize

## Requirements
For rules the following site shall be considered as reference: 'https://www.todacarreira.com/calculo-salario-liquido/'

* The following fields shall be presented:

  - Gross salary (editable)
  - Base salary for INSS discount (read-only)
  - INSS discount (read-only)
  - Base salary for IRPF discount (read-only)
  - IRPF discount (read-only)
  - Net salary (read-only)
  
* An horizontal bar, presenting with diferent colors the following data:
  - INSS discount percentage
  - IRPF discount percentage
  - Net salary
  
* The sum of the three items above shall sum 100% of gross salary.

* The CLT rules are more complex than what will be calculated here, so you should ignore discounts other than INSS and IRPF and dependents.

* Implementation shall use Class Components.

## Instalation

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
