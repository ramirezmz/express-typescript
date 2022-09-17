# Criando uma API REST com tipos estáticos



### Tipando um objeto
Após termos criado a nossa interface, devemos aplicar no dado que estará vindo da nossa api ou de algum lugar, para isso, recebemos na variável `diaries` o valor que está vindo (que no nosso caso é um json que criamos).
Além disso, dizemos ao Typescript que o objeto que será criado é um `Array de DiaryEntry`, porém isso não é o suficiente, pois, devemos confirmar a typescript que o que está vindo deve ser tratado como um `Array de DiaryEntry` então, seria da seguinte forma:
```ts
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>
```

Podemos também fazer dessa forma:
```ts
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
```


## Termos usados

- **`middleware`** é um software que fica entre um sistema operacional e os aplicativos executados nele. Funcionando essencialmente como uma camada de tradução oculta, o middleware permite a comunicação e o gerenciamento de dados para aplicativos distribuídos. Às vezes, é chamado de encanamento, pois conecta dois aplicativos para que dados e bancos de dados possam ser facilmente transmitidos entre o “pipe”. O uso de middleware permite que os usuários realizem solicitações como enviar formulários em um navegador da Web ou permitir que o servidor da Web retorne páginas da Web dinâmicas com base no perfil de um usuário.

- **Diferença entre `ESModules` & `Commonjs`** 

  A forma de importação do ES6 é:

  `import express from 'express'`

  enquanto a do Commonjs é:

  `const express = require('express')`

-  O que é o arquivo `types.d.ts`?

  Por padrao Typescript irá buscar este arquivo do seu projeto com o propósito de encontrar os tipos que serão usados.

- **`interface`**
  
  Básicamente uma interface em typescript é um contrato para cada objeto que teremos.

```ts
interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
}
```
OBS. o tipo `Weather` é uma conjunto de strings especiais que criamos, embaixo está o modelo.

## Número limitado de strings

```ts
type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

type Visibility = 'great' | 'good' | 'ok' | 'poor'
```

- **Porque não usar type ao inves de interface?**
  
  A Diferença entre os dois é que... quando desejamos extender umas propriedades para outro objeto, a interface faz isso de uma forma simples, enquanto o type nos faz criar um novo objeto com as propriedades.
  
  **Extendendo com `interface`**
  ```ts
  interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment: string
  }

  interface SpecialDiaryEntry extends DiaryEntry {
    flightNumber: number
  }
  ```

  **Extendendo com `type`**
  ```ts
  type DiaryEntry = {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
  }

  type SpecialDiaryEntry = DiaryEntry & {
    flightNumber: number
  }
  ```
  Particularmente, prefiro usar interface para coisas dinamicas e type para coisas estáticas.

### Criar uma interface a partir de outra

Temos duas formas de poder obter os valores criados a partir de uma interface, o `Pick<NomeDaInterface, 'valores'>` e o `Omit<NomeDaInterface, 'valores'>`.

```ts
interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
```


  ### Links

  https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

  https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-middleware/