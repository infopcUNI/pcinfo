// pages/unidad5.tsx
import React from 'react';

const Unidad5: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unidad 5: Unidad de Control
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Explora la unidad de control, responsable de coordinar el ciclo de instrucción mediante señales de control, estrategias de ejecución y sus implementaciones fijas y microprogramadas.
          </p>
        </div>
      </section>

      {/* 5.1 La función de control */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.1 La función de control
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>El trabajo del CPU es ejecutar instrucciones.</li>
            <li>Lo realiza desarrollando continuamente un “ciclo de instrucción”.</li>
            <li>La unidad de control coordina este ciclo activando señales de control que gobiernan cada dispositivo.</li>
            <li>Es como un “titiritero” que hala las cuerdas que controlan los dispositivos.</li>
            <li>Ejemplo: Para cargar un valor en un registro de propósito general, activa las líneas de selección correspondientes en el momento preciso.</li>
          </ul>
        </div>
      </section>

      {/* 5.2 El ciclo de instrucción */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.2 El ciclo de instrucción
          </h2>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-600">FASE FETCH</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
              <li>Leer próxima instrucción: PC al MAR, Activar Read.</li>
              <li>Incrementar el PC: Sumar PC + 1 y actualizar PC.</li>
              <li>Decodificar: MDR al IR, Decodificar.</li>
            </ol>
            <h3 className="text-2xl font-semibold text-green-600">FASE EXECUTE (Depende del tipo de Instrucción: OP)</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg" start={4}>
              <li>Traer 1er Operando → Registro Temporal (SOURCE).</li>
              <li>Traer 2do Operando → Y.</li>
              <li>Realizar Operación: ALU: Z ← [Bus] OP [Y].</li>
              <li>Almacenar Resultado: Z va a Rd o a M(MAR).</li>
              <li>Verificar Interrupciones: ¿Sí? → Servir ISR.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 5.3 Operaciones Básicas de Control */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.3 Operaciones Básicas de Control
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Transferir el contenido de un registro a otro.</li>
            <li>Leer o escribir en la memoria.</li>
            <li>Ejecutar una operación de la ALU.</li>
            <li>Incrementar el PC.</li>
            <li>Modificar el PC.</li>
            <li>Verificar el estado de las solicitudes de interrupción.</li>
            <li>Verificar / establecer el estado de las banderas y códigos de condición.</li>
            <li>Limpiar, verificar o establecer bits específicos de registros auxiliares (como Y).</li>
            <li>Decodificar una instrucción.</li>
          </ul>
        </div>
      </section>

      {/* 5.4 Control de registros */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.4 Control de registros
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Cada salida de registro aislada del BUS (requerido). Uso de buffers no inversores de tercer estado. Líneas de control para activar la entrada y salida de registros.
          </p>
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Operaciones para habilitar la transferencia</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Poner el contenido de cada línea (FF) del registro fuente en su correspondiente línea en el BUS. (Salida)</li>
            <li>Realizar una carga paralela de cada línea del Bus a su correspondiente FF en el registro destino. (entrada)</li>
            <li>Necesidad de forma de controlar entrada y salida.</li>
            <li>Ejemplo: MAR ← [PC]</li>
          </ul>
        </div>
      </section>

      {/* 5.5 Control de la memoria */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.5 Control de la memoria
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Memoria es una colección de celdas de almacenamiento de 1 bit.</li>
            <li>Organizada en grupos de bits: palabra o byte (linea-columna).</li>
            <li>Cada grupo se accede por su posición: Dirección.</li>
            <li>Dos operaciones: Lectura (R) y Escritura (W).</li>
            <li>Interfaz: Puerto para Dirección a acceder, Puerto de Datos (R,W o unificado), Líneas de control: R, W, Completamiento de ciclo.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-600 mb-4 mt-8">Leer de la Memoria</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Copiar la dirección a acceder en el MAR (registro del CPU conectado al puerto de direcciones de M a través del bus de direcciones de la computadora).</li>
            <li>Activar la señal de control READ.</li>
            <li>La memoria selecciona la línea correspondiente a la dirección.</li>
            <li>Escribe en el puerto de datos a la salida el contenido de ésta.</li>
            <li>El dato se propaga a través del bus del sistema, copiándose en el MDR del CPU.</li>
            <li>El controlador de Memoria o algún dispositivo equivalente notifica al CPU que el ciclo de lectura a memoria se ha completado.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-600 mb-4 mt-8">Escribir en la Memoria</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Copiar la dirección a acceder en el MAR.</li>
            <li>Copiar el dato a escribir en el MDR (Registro del CPU conectado al bus de Datos).</li>
            <li>Activar la señal de control WRITE.</li>
            <li>La memoria selecciona la línea correspondiente a la dirección.</li>
            <li>Toma el dato que desde el MDR se propaga hasta el puerto de datos de la Memoria a través del bus.</li>
            <li>Escribe el dato del puerto de entrada a la localidad de memoria seleccionada.</li>
          </ul>
        </div>
      </section>

      {/* 5.6 Ejecutar operación ALU */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.6 Ejecutar operación ALU
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>ALU tiene dos puertos de entrada (operandos) y uno de salida (resultado).</li>
            <li>En nuestra arquitectura: Z ← [X] OP [Y].</li>
            <li>Un latch en la entrada Y y el bus en entrada X.</li>
            <li>Se trasladan los operandos a la entrada y se selecciona la operación.</li>
            <li>Se suele copiar el resultado en un latch para salvaguardarlo.</li>
          </ul>
        </div>
      </section>

      {/* 5.7 Incrementar el PC */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.7 Incrementar el PC
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>El PC debe incrementarse en k de acuerdo al tamaño de la instrucción actual a fin de apuntar a la próxima instrucción.</li>
            <li>En nuestro caso de estudio k = 1 porque nuestras instrucciones son de 16 bits y la memoria es direccionable por palabras (de 16 bits cada una).</li>
            <li>Puede usarse la ALU para estos fines o puede disponerse un sumador dedicado para el PC.</li>
            <li>Si se usa la ALU, como en nuestro caso de estudio, el texto propone un enfoque interesante: Se pone el [PC] en el bus (X=PC), se resetea Y (Y=0), se setea el acarreo de entrada y se suma. De esta forma Z = [PC]+1.</li>
            <li>Si se dispone de un sumador dedicado para incrementar el PC, este tiene en su entrada X el [PC] todo el tiempo y en su entrada Y el valor del incremento fijo, p.e. 1.</li>
            <li>La UC se encarga de controlar cuándo el valor de [PC]+1 se copia en PC.</li>
          </ul>
        </div>
      </section>

      {/* 5.8 Modificar el PC */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.8 Modificar el PC
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>El PC se modifica cuando se tienen instrucciones de salto.</li>
            <li>Saltos pueden ser por modo: Absoluto (PC ← d), Relativo (PC ← [PC] + d).</li>
            <li>Por la decisión: Condicional (Si Condición entonces Salto), Incondicional (Salto, independientemente de todo).</li>
            <li>Si es absoluto, solo se transfiere d del IR al PC.</li>
            <li>Si es relativo, se usa la ALU: Y ← [IR(d)] y PC en el Bus y se suma: Z ← [PC] + d.</li>
          </ul>
        </div>
      </section>

      {/* 5.9 Verificar el estado de las solicitudes de interrupción */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.9 Verificar el estado de las solicitudes de interrupción
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>El CPU normalmente tiene una señal de control de entrada para interrupción INT que le permite saber si algún dispositivo externo solicita atención.</li>
            <li>Dado que normalmente existen muchos dispositivos que pueden solicitar atención (múltiples interrupciones) a la vez, se cuenta con un controlador auxiliar que coordina estas solicitudes y las presenta de una a una al CPU.</li>
          </ul>
        </div>
      </section>

      {/* 5.10 Verificar / establecer el estado de las banderas y códigos de condición */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.10 Verificar / establecer el estado de las banderas y códigos de condición
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Banderas y códigos de condición expresan el estado de la computadora. Se requieren tanto para el procesamiento interno como para el control de los otros subsistemas y dispositivos externos.</li>
            <li>Se almacenan normalmente como un conjunto de bits. Por ejemplo en la arquitectura de referencia del curso, esta se denomina Processor Status Word (PSW).</li>
            <li>Conforman el estado del Procesador.</li>
            <li>Las banderas indican resultado de operaciones.</li>
            <li>Códigos indican estado de la máquina.</li>
            <li>Ejemplo: PDP-11 los almacena en una palabra de estado de procesador o PSW.</li>
            <li>Por su parte, otros procesadores, como el 8086, usan registro de Flags.</li>
          </ul>
        </div>
      </section>

      {/* 5.11 Limpia, verifica o establece bits específicos de registros auxiliares */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.11 Limpia, verifica o establece bits específicos de registros auxiliares (como Y)
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Operaciones para manejar registros auxiliares como Y, incluyendo limpieza, verificación y establecimiento de bits específicos.
          </p>
        </div>
      </section>

      {/* 5.12 Decodificar una instrucción */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.12 Decodificar una instrucción
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Proceso para interpretar el código de operación y operandos de la instrucción en el IR.
          </p>
        </div>
      </section>

      {/* 5.13 Ejecución de la instrucción */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.13 Ejecución de la instrucción
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Existen diferentes tipos de instrucciones.</li>
            <li>En nuestro caso estudiaremos una muestra de 3 grupos más importantes:</li>
            <li>OP: Operaciones binarias aritméticas y lógicas como ADD, SUB, AND, OR, etc.</li>
            <li>MOV: Operación de transferencia 2D.</li>
            <li>BRx: Operaciones de saltos como BR, BRN, BRZ, etc.</li>
            <li>Necesario estandarizar la forma en que se realiza la ejecución de las diferentes instrucciones: facilidad y eficiencia.</li>
            <li>Estrategias de ejecución para cada grupo.</li>
            <li>Basadas en el ciclo de instrucción.</li>
            <li>Fase FETCH es única para todas las instrucciones.</li>
            <li>Fase EXECUTE diferenciada para las instrucciones de acuerdo a la operación y modos de direccionamiento de los operandos.</li>
          </ul>
        </div>
      </section>

      {/* 5.14 Estrategias de ejecución */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.14 Estrategias de ejecución
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Estrategia Instrucciones OP</h3>
              <h4 className="text-xl font-medium mb-2">Fase Fetch:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Poner el valor del PC en el MAR y mandar a leer.</li>
                <li>Incrementar el PC y esperar MFC.</li>
                <li>Pasar el contenido del MDR al IR y Decodificar.</li>
              </ul>
              <h4 className="text-xl font-medium mb-2 mt-4">Fase Execute:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Trasladar el primer operando a SOURCE.</li>
                <li>Trasladar el segundo operando a Y.</li>
                <li>Efectuar la operación ALU: Z ← [SOURCE] OP [Y].</li>
                <li>Trasladar el resultado al destino (Rd o MDR/WRITE).</li>
                <li>END.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Estrategia MOV</h3>
              <h4 className="text-xl font-medium mb-2">Fase Fetch:</h4>
              <p className="text-gray-700 dark:text-gray-300">Ídem al anterior.</p>
              <h4 className="text-xl font-medium mb-2 mt-4">Fase Execute:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Trasladar el primer operando a SOURCE.</li>
                <li>Calcular la dirección efectiva del segundo operando o destino (conocer Rd o copiar EA en MAR).</li>
                <li>Trasladar el [SOURCE] al destino (Rd o MDR/WRITE).</li>
                <li>END.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Estrategia instrucciones BRx</h3>
              <h4 className="text-xl font-medium mb-2">Fase Fetch:</h4>
              <p className="text-gray-700 dark:text-gray-300">Ídem.</p>
              <h4 className="text-xl font-medium mb-2 mt-4">Fase Execute:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Si es condicional, verificar condición. Si condición no se cumple → END.</li>
                <li>Copiar PC en Y.</li>
                <li>Poner en el bus el desplazamiento almacenado en IR.</li>
                <li>Sumar y almacenar en Z.</li>
                <li>Trasladar el [Z] al PC.</li>
                <li>END.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Estrategias PUSH y POP</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Muchas arquitecturas de dos direcciones (R2 o 2D) implementan una pila como una opción adicional de transferencia de datos.</li>
                <li>Requieren implementar PUSH y POP.</li>
                <li>Normalmente estas pilas son de empuje hacia abajo, por lo que:</li>
                <li>PUSH f → MOV –(SP), [f] (f puede estar en cualquier modo).</li>
                <li>POP d → MOV d, (SP)+ (d puede estar en cualquier modo contenido).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5.15 Desarrollo en pasos de control */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.15 Desarrollo en pasos de control
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Permite describir los pasos de control: conjunto de operaciones de control que se realizan en un mismo pulso de reloj.</li>
            <li>Basado en las estrategias de ejecución definidas.</li>
            <li>“Receta” para la ejecución de la instrucción: En cada paso especifica las operaciones a realizar y las señales de control que deben activarse para realizarlas.</li>
            <li>Base para implementar la UC.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-600 mb-4 mt-8">Ejemplo: Ejecución de ADD R1, R2</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Paso</th>
                  <th className="px-4 py-2 border-b text-left">Acción u Operaciones de Control</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">PCout, MARin, READ, Clear Y, Set C, ADD, Zin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">2</td>
                  <td className="px-4 py-2 border-b">Zout, PCin, WMFC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">3</td>
                  <td className="px-4 py-2 border-b">MDRout, IRin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">4</td>
                  <td className="px-4 py-2 border-b">R1out, SOURCEin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">5</td>
                  <td className="px-4 py-2 border-b">R2out, Yin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">6</td>
                  <td className="px-4 py-2 border-b">SOURCEout, ADD, Zin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">7</td>
                  <td className="px-4 py-2 border-b">Zout, R2in</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">8</td>
                  <td className="px-4 py-2">End</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Add similar tables for other examples like ADD (R1), R2, BR d, BRN d */}
        </div>
      </section>

      {/* 5.16 Implementación de la UC */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.16 Implementación de la UC
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Hemos analizado las diferentes operaciones de control requeridas para la ejecución.</li>
            <li>Hemos definido las estrategias para los diferentes tipos de instrucciones.</li>
            <li>Hemos desarrollado las secuencias de pasos de control, por tanto sabemos: Para cada instrucción Ii, los valores de las señales de control en cada paso de control Tj.</li>
            <li>Con esta información ya podemos implementar la UC poniendo as su salida los valores activos en 1 y los inactivos en 0 para cada Tj de cada Ii.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-600 mb-4 mt-8">Dos enfoques</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Totalmente Hardware: Alambrado o control fijo.</li>
            <li>Secuencia de pasos: Máquina de estados finitos.</li>
            <li>Red combinacional: cada paso se convierte a una entrada (T1, T2, …, Tn).</li>
            <li>Microprogramación:</li>
            <li>Se “escribe” un microprograma para cada instrucción basado en los pasos de control de la misma.</li>
            <li>Microprogramas se almacenan en una memoria de control.</li>
            <li>Se carga el microprograma de la instrucción y se ejecuta secuencialmente.</li>
          </ul>
        </div>
      </section>

      {/* 5.17 Implementación de la UC fija */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.17 Implementación de la UC fija
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            ¡Implementar la UC se reduce a obtener las expresiones lógicas de cada señal de control de salida a partir de las entradas Ii, Tj, Flags y Señales de entrada!
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Para cada señal, revisamos donde aparece encendida y definimos su expresión lógica, por ejemplo:</li>
            <li>Zin = T1 + ADD.T6 + BRN.T5 + ....</li>
            <li>End = T8.ADD + T7.JR + T4.(~N).BRN + T7.N.BRN + …</li>
            <li>Y se implementan los circuitos lógicos.</li>
            <li>En el caso de la Señal RUN, esta se genera a partir de WMFC y MFC (señal que informa fin del ciclo de lectura).</li>
            <li>Para evitar un paso de control recortado, se sincroniza MFC con el reloj base a fin que RUN se restablezca con el reloj.</li>
            <li>Dado el masivo uso de compuertas en esta implementación, se emplean arreglos de lógica programable (PLA) construidos con VLSI.</li>
          </ul>
        </div>
      </section>

      {/* 5.18 Unidad de Control Microprogramada */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.18 Unidad de Control Microprogramada
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>En cada lapso de tiempo definido por un pulso de reloj, la UC activa unas señales y apaga el resto.</li>
            <li>Si organizamos las señales de control con sus valores en cada paso se control: forman matriz con patrón binario.</li>
            <li>Si lo almacenamos en una memoria, cada palabra de memoria corresponde a los valores de las señales en un paso: Palabra de control (cw).</li>
            <li>Tal memoria sería la base para implementar la UC: Memoria de Control.</li>
            <li>Los pasos de control para ejecución de una instrucción se almacenarían en cw contiguas en la memoria.</li>
            <li>Conjunto de cw de una instrucción: Microprograma de la instrucción.</li>
            <li>Para implementar la UC solo se requiere leer la palabra de control adecuada en cada paso y poner los valores correspondientes en la salida.</li>
            <li>Solo necesitamos saber la dirección de memoria en cada paso: Secuenciador que lleve el control del microprograma: microPC.</li>
            <li>La Fase FETCH es única y solo se almacena una vez a partir de la dirección 0 de la memoria de control.</li>
            <li>El microPC (μPC) inicia por tanto en 0.</li>
            <li>Con cada pulso de reloj se incrementa el μPC para que apunte a la próxima instrucción.</li>
            <li>Al final de la Fetch, el decodificador carga en el μPC la dirección inicial de cada microprograma.</li>
            <li>La cw provee los valores de las señales de control a la salida.</li>
            <li>Los Códigos y Banderas de condición pueden modificar el flujo de programa: BRx.</li>
            <li>Requerida la capacidad de modificar el μPC durante la ejecución de un μPrograma: Microrramificación (μBr).</li>
            <li>Al final de la instrucción, la señal End poner el μPC a 0.</li>
            <li>Para la espera del ciclo de lectura, la UC debe pausar el secuenciador mientras esté activa WMFC.</li>
            <li>Dos enfoques: Polling de la señal MFC, Hardware de Inhibición de incrementador del μPC.</li>
            <li>Memoria de control debe ser pequeña (mucho mayor que) rápida.</li>
            <li>Uso de 1 bit por señal es ineficiente: END sola en un paso de control, señales mutuamente excluyentes, etc.</li>
            <li>Propuesta: uso de códigos para reducir bits. Por ejemplo, las funciones ALU, si existen 15, se pueden codificar en 4 bits. Solo un Rxout está activo a la vez, etc.</li>
            <li>Una organización de memoria de control que emplea un bit por señal se dice que es Horizontal. Una en que cada señal pertenece a un grupo codificado, se denomina Vertical. Cuando empleamos ambas técnicas, tenemos organización híbrida.</li>
          </ul>
        </div>
      </section>

      {/* 5.19 Microprograma y Microrramificaciones */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.19 Microprograma y Microrramificaciones
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Las instrucciones pueden tener diferentes modos de direccionamiento: ADD R1, R2; ADD (R1), R2; ADD (R1)+, 1000H(R2).</li>
            <li>El formato R de nuestra arquitectura: 64 posibles combinaciones.</li>
            <li>No es eficiente implementar un μprograma por cada variante: Usar uno solo con microrramificaciones para tratar cada modo.</li>
            <li>En esta arquitectura la memoria de control de 512 palabras direccionable en octal: μPC: 3 dígitos octales.</li>
            <li>La ejecución del microprograma se representa de forma similar a los pasos de control pero en lugar de los pasos describimos la dirección de memoria y en lugar de las acciones describimos las señales activas y la definición formal de las microrramificaciones.</li>
          </ul>
          <h3 className="text-2xl font-semibold text-green-600 mb-4 mt-8">Ejemplo: Microprograma de ADD (R7)+, R3</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Dirección (octal)</th>
                  <th className="px-4 py-2 border-b text-left">Microinstrucción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">000</td>
                  <td className="px-4 py-2 border-b">PCout, MARin, READ, Clear Y, Set C, ADD, Zin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">001</td>
                  <td className="px-4 py-2 border-b">Zout, PCin, WMFC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">002</td>
                  <td className="px-4 py-2 border-b">MDRout, IRin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">003</td>
                  <td className="px-4 py-2 border-b">μBr: μPC ← [PLA]; μPC ← 101, μPC4 ← [[R1],[R0],[IR0]]; μPC3 ← [[R1],[R0],[IR0]]</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">121</td>
                  <td className="px-4 py-2 border-b">R7out, MARin, READ, Clear Y, Set C, ADD, Zin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">122</td>
                  <td className="px-4 py-2 border-b">Zout, R7in</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">123</td>
                  <td className="px-4 py-2 border-b">μBr: μPC ← 166; μPC0 ← [IRa]; WMFC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">166</td>
                  <td className="px-4 py-2 border-b">MDRout, MARin READ, WMFC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">167</td>
                  <td className="px-4 py-2 border-b">MDRout, SOURCEin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">170</td>
                  <td className="px-4 py-2 border-b">μBr: μPC ← 201; μPC4 ← [IR4]; μPC3 ← [IR3] [IRa] [IR3]</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">201</td>
                  <td className="px-4 py-2 border-b">R3out, Yin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">202</td>
                  <td className="px-4 py-2 border-b">μBr: μPC ← 270</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">270</td>
                  <td className="px-4 py-2 border-b">SOURCEout, ADD, Zin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">271</td>
                  <td className="px-4 py-2 border-b">μBr: μPC ← 272; μPC0 ← [IR3]; [IR3]</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">272</td>
                  <td className="px-4 py-2 border-b">Zout, R3in, End</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5.20 Ventajas y aplicaciones de la microprogramación */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            5.20 Ventajas y aplicaciones de la microprogramación
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Ampliar el repertorio de instrucciones: agrandar memoria de control, copiar en ella los nuevos microprogramas y actualizar la tabla de decodificación de dirección base de microprogramas.</li>
            <li>Modificación de instrucciones.</li>
            <li>Emulación de otras arquitecturas.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Unidad5;