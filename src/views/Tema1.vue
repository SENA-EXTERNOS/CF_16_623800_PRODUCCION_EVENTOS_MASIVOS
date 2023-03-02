<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ciclo de mejoramiento continuo de Deming

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        .bloque-texto-b.bloque-texto-recuadro2.p-4.mt-3.bloque-texto-width1
          .bloque-texto-b__texto
            p #[b ¿Qué es la mejora continua de Deming?]  Es una estrategia que se aplica para cualquier tipo de actividad económica, no es exclusiva para las actividades económicas de cadenas de producción, sino lo contrario, es la forma en la cual la organización busca realizar procesos o actividades más eficientes, con menos recursos, optimizando tiempo y evitando reprocesos.
            
      .col-lg-4.mt-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen')

      .col-lg-4
        p.mt-3 Los ciclos de mejora continua Deming reciben este nombre por su autor Edwards Deming, quien fue su principal promotor. También es conocido como el ciclo PHVA (siglas de planificar, hacer, verificar y actuar), que se utiliza como herramienta para implementar controles, o como su nombre lo indica, acciones de mejora de manera oportuna, para favorecer la competitividad de una empresa u organización, y, en este caso, de mejoras ante un riesgo; es por ello que se desarrollan a partir de procesos de evaluación y prácticas, donde se pone a prueba la capacidad de respuesta de una organización.  El ciclo PHVA, de acuerdo con lo estipulado por la norma (Instituto Colombiano de Normas Técnicas, 2015), puede describirse brevemente como:

    .row.mt-5
      p Ciclo de mejoramiento continuo de Deming

    .row.justify-content-center.mb-5.mt-5
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/img2.svg", alt="alt").img250
        
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt").img100
            .col
              h5 Planificar
              p Establecer los objetivos del sistema y sus procesos, los recursos necesarios para generar y proporcionar resultados de acuerdo con los requisitos del cliente y las políticas de la organización; además, identificar y abordar los riesgos y las oportunidades.

        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img4.svg", alt="alt").img100
            .col
              h5 Hacer
              p Implementar lo planificado.

        .crd.crd--avatarHorizontal2.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img5.svg", alt="alt").img100
            .col
              h5 Verificar
              p Realizar el seguimiento y (cuando sea aplicable) la medición de los procesos y los productos y servicios resultantes respecto a las políticas, los objetivos, los requisitos y las actividades planificadas, e informar sobre los resultados.

        
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/img6.svg", alt="alt").img100
            .col
              h5 Actuar
              p Tomar acciones para mejorar el desempeño cuando sea necesario.

    .row.mt-5
      h3 Ejemplo de aplicación del ciclo
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
        .bloque-texto-g__img.bloque-texto-g__img2(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img7.png')})`}"
        )
        .bloque-texto-g__texto.p-4.bloque-texto-g__texto2
          p.mb-0 La empresa de eventos ‘Fiestas y animaciones’ es la responsable de organizar el evento de fin de año para los trabajadores en una empresa donde asistirán aproximadamente 600 personas. Para esta actividad, la empresa contratante solicitó a ‘Fiestas y animaciones’ enviar el protocolo para la atención de emergencias; la persona encargada de verificar el cumplimiento de los requisitos mínimos para emergencias detecta que no se inventariaron los recursos, y que tampoco se determina la cadena de llamadas, ni el protocolo de activación del plan de contingencia. Teniendo en cuenta los hallazgos identificados, la empresa de eventos y fiestas procede a convocar a su equipo de trabajo e inicia la construcción de su plan de mejora; el encargado de seguridad y salud en el trabajo propone que se ejecute de la siguiente manera: 


    .row.justify-content-center.align-items-center.mt-5
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen')    

      .col-lg-9
        .row.justify-content-center.align-items-center.mt-5
          .hr-5.hr-color.mb-3
          .col-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='Texto que describa la imagen').width-image-numbers  
          
          .col-lg-11
            p #[b Planeación de la mejora]
            p Consistirá en diseñar un instrumento para inventariar los recursos de atención de emergencias y documentar el mecanismo de activación del plan de contingencia, quedando inmersa la cadena de llamadas.


        .row.justify-content-center.align-items-center.mt-3
          .hr-5.hr-color.mb-3
          .col-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen').width-image-numbers  
          
          .col-lg-11
            p #[b Hacer]
            p Se crean las listas de verificación y se procede a documentar y socializar el procedimiento de la activación de contingencias.

        .row.justify-content-center.align-items-center.mt-3
          .hr-5.hr-color.mb-3
          .col-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img11.svg', alt='Texto que describa la imagen').width-image-numbers  
          
          .col-lg-11
            p #[b Verificación]
            p Se aplican las listas de chequeo para medir el cumplimiento de los recursos en la atención de emergencias, y se comprueba que el personal responsable de emergencias conoce y entiende los mecanismos de activación de la contingencia. 
            
        .row.justify-content-center.align-items-center.mt-3
          .hr-5.hr-color.mb-3
          .col-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img12.svg', alt='Texto que describa la imagen').width-image-numbers  
          
          .col-lg-11
            p #[b Actuar]
            p De ser necesario, se toman acciones para subsanar los hallazgos en la verificación y se inicia nuevamente el ciclo. 
          .hr-5.hr-color.mt-3

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        p Teniendo en cuenta este contexto, se puede evidenciar que las mejoras son ciclos repetitivos que tienen como finalidad optimizar los procesos, procedimientos y productividad de las organizaciones. Todas las fases en una mejora deben estar interrelacionadas entre sí y ser coherentes con los objetivos planteados.
      
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img13.svg', alt='Texto que describa la imagen')

      .col-lg-4
        .bloque-texto-b.bloque-texto-recuadro2.p-4.mt-3.bloque-texto-width1
          .bloque-texto-b__texto
            p Por otra parte, cada organización podrá escoger las herramientas que considere pertinentes para el diseño y ejecución de las mejoras, pero lo más importante es que la decisión de adoptar e implementar este tipo de acciones sea aceptada, no solo por quien lidera el proceso, sino por todo el equipo de trabajo. Es necesario que todo el personal participe para que, con sus conocimientos y experticia, se pueda contribuir al éxito de lo que se planea implementar, y que las acciones implementadas sean construidas por todos los participantes; con esto se garantiza que la adherencia o aceptación de los cambios que surjan sean tomados a buen término por quienes se verán impactados en sus actividades o procesos.

    .row.mt-5
      p A partir de este análisis, se puede identificar que el ciclo de mejora es continuo y que se puede reiniciar cuantas veces se considere necesario, siempre que no se pierda la objetividad del mismo y dando nuevamente inicio al ciclo PHVA con el acompañamiento del equipo de trabajo, conformado por quienes tienen el mismo interés de mejora. En los riesgos este proceso toma mayor relevancia, toda vez que es la oportunidad de intervenir, de manera más rápida y oportuna, en las condiciones inseguras que puedan derivar en sucesos con graves afectaciones a la salud.           


    separador
    h3.mt-5(data-aos="zoom-in-left") Herramientas y metodología de la mejora continua

    .row.justify-content-justify.align-items-center.mt-5.bgr1-tema1
      .col-lg-8.p-4
        p La mejora continua dentro de la ISO 9001 supone disponer de un enfoque coherente de la globalidad de la organización, formar a los recursos humanos en cuanto a los métodos y herramientas de mejora continua, promocionar internamente una cultura basada en la calidad con objetivos definidos para orientar estas acciones y hacer su seguimiento, así como el reconocimiento de las mejoras.

        p De acuerdo a la definición anterior, la mejora es un mecanismo que permite a una empresa, de cualquier actividad económica, identificar las falencias en los procesos o procedimientos a través de la aplicación de herramientas que sean adecuadas y que, a su vez, logren contextualizar la causa raíz del problema, para que, a partir de esta, se diseñen y ejecuten las actividades que sean acordes a las necesidades reales identificadas.

    .row.mt-5
      h3 Elementos para la creación de un plan de mejora
      p Veamos cómo se desarrolla paso a paso la creación de un plan de mejora, es importante el seguimiento de cada uno de los siguientes aspectos para lograr el cumplimiento de los objetivos propuestos, con el fin de garantizar la satisfacción del cliente y el cumplimiento legal:


    PasosA.color-acento-contenido.mb-5(tipo="l")
      .row.justify-content-justify.align-items-center
        .col-md-9.mb-4.mb-md-0
          h3 Identificación de problema
          p Esta identificación de problemas, para el caso de los planes de emergencias, surge de procesos de auditorías internas, desarrollo de prácticas como simulacros o simulaciones y revisión de procedimientos por parte de los brigadistas o coordinadores de emergencias.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img14.svg', alt='Texto que describa la imagen')

      .row.justify-content-justify.align-items-center
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen')

        .col-md-9.mb-4.mb-md-0.time-line-rediect
          h3 Priorización
          p Siendo conscientes de que no todos los problemas identificados se podrán solucionar, se debe priorizar la intervención teniendo en cuenta cuál de las situaciones generaría mayor impacto negativo sobre los asistentes a un evento. 


      .row.justify-content-justify.align-items-center
        .col-md-9.mb-4.mb-md-0
          h3 Delimitar el problema
          p La estrategia más fácil para delimitar el problema es la metodología 5W+H, que, de acuerdo con el Laboratorio Tecnológico de Uruguay (2009), es una metodología de análisis empresarial que consiste en contestar seis preguntas básicas: ¿qué? (#[i what?]), ¿por qué? (#[i why?]), ¿cuándo? (#[i when?]), ¿dónde? (#[i where?]), ¿quién? (#[i who?]) y ¿cómo? (#[i how?]). Esta regla, creada por Lasswell (1979), puede considerarse como una lista de verificación mediante la cual es posible generar estrategias para implementar una mejora.

        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen')

      .row.justify-content-justify.align-items-center
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img17.svg', alt='Texto que describa la imagen')

        .col-md-9.mb-4.mb-md-0.time-line-rediect
          h3 Identificar y analizar las causas
          p Para la identificación del problema, se sugiere la aplicación de una lluvia de ideas o un árbol de causas, los cuales son metodologías que en su estructura permiten definir las consecuencias y las causas que desencadenaron el problema, facilitando un análisis objetivo que debe ser congruente con la situación real que se está evaluando.

        p.time-line-rediect.mt-3 Para entender cada una de estas metodologías, se presenta esta breve explicación:
        
        .bloque-texto-b.bloque-texto-recuadro3.p-4.mt-3.bloque-texto-width1.time-line-rediect
          .bloque-texto-b__texto
            p #[b Lluvia de ideas:] es un método creado por Alex Faickney Osborn (1939), cuyo objetivo es tener en cuenta las opiniones de los participantes en el desarrollo de una actividad específica, con vistas a definir las conclusiones que lleven a implementar mejoras. La forma de desarrollar el ejercicio es, primero, reunir a quienes participarán, se sugiere que sea personal que domine el tema; una vez que se tenga definido el grupo de trabajo, se procede a que cada participante escriba o manifieste lo que piensa; siempre una persona debe moderar la actividad para que sea provechosa, no se pierda el fin de esta y realmente se puedan establecer las causas que se están definiendo. Por ejemplo, en una reunión que busca definir cómo prevenir la ocurrencia de incendios, se grafica la prevención a través de un mapa mental de esta manera:

        .row.justify-content-center.align-items-center.mt-3
          .col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img18.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center.time-line-rediect.mt-3
          .col-lg-12
            .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
              p(data-aos="fade-down") Una vez escuchadas las opiniones, se definen las causas; se recomienda priorizar para establecer los planes de mejora conforme a la necesidad identificada. Es importante recordar que, si son acciones derivadas de la ocurrencia de un evento, son correctivas, si, por el contrario, se establecen por una lista de chequeo o antes del desarrollo de una actividad, son preventivas.


        .bloque-texto-b.bloque-texto-recuadro3.p-4.mt-3.bloque-texto-width1.time-line-rediect
          .bloque-texto-b__texto
            p #[b Árbol de causas]: es un método que permite relacionar causas con un suceso principal. Se tienen causas básicas, que son aquellas que están en un suceso, son reales y se manifiestan como un síntoma que desencadena las causas inmediatas, las cuales son aquellas situaciones que se presentan justo antes de la ocurrencia de la situación; para facilitar la comprensión de la metodología, es preciso revisar el siguiente ejemplo, en el que se quiere identificar las causas del no funcionamiento de un sistema de alarma de emergencia:


        .row.justify-content-center.align-items-center.mt-3
          .col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center.time-line-rediect.mt-3
          .col-lg-12
            .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
              p(data-aos="fade-down") De acuerdo con este árbol de causas, se evidencia que la falla se presenta desde que se estableció el sistema de alarma, teniendo en cuenta que no se contemplan otras alternativas y que en todos los planes de emergencia se deben prever sistemas alternativos.


      .row.justify-content-justify.align-items-center
        .col-md-9.mb-4.mb-md-0
          h3 Establecer medidas de control
          p De acuerdo con la identificación de las causas del problema, se deben definir las medidas que permitan mitigar la presentación del suceso o que se repita si se está trabajando sobre lo ocurrido; para ello se recomienda la elaboración de planes de mejora a partir del ciclo PHVA.

        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen')


    .row.mt-5
      h3 Ejemplo de aplicación del plan de mejora
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
        .bloque-texto-g__img.bloque-texto-g__img2(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img21.png')})`}"
        )
        .bloque-texto-g__texto.p-4.bloque-texto-g__texto2
          p.mb-0 #[b Para poder entender el proceso anterior, es preciso desarrollar el siguiente caso:] Se gestionan los permisos para la realización de un concierto. Como ya se sabe, uno de los requisitos es el Plan de Emergencias y Contingencias, para ello la empresa organizadora diseñó el documento, pero para poner a prueba la capacidad de respuesta, planean la ejecución de un simulacro por sismo. Ahora bien, en el desarrollo del ejercicio se evidenciaron las siguientes falencias: los tiempos de respuesta de los organismos de socorro fueron superiores a lo esperado, el tiempo de evacuación de los participantes de la actividad tardó demasiado y la brigada de primeros auxilios no contaba con los recursos suficientes para inmovilización y traslado de pacientes.

    .row.mt-5
      p Después de identificar y reconocer las fases o aspectos a tener en cuenta en el anterior ejemplo, se encuentra lo siguiente:


    .row.justify-content-between.align-items-center
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4.bgr2-tema1
          PasosB.color-acento-contenido
            .row.justify-content-center(titulo="Paso 1").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Problema
                p Las vías de evacuación no estaban señalizadas y no se contaba con llaves para abrir las salidas alternas del lugar, lo cual generó demoras tanto en el ingreso de los organismos de socorro como en la salida de los participantes. Los insumos de camillas, inmovilizadores y botiquines no eran suficientes para la cantidad de personas lesionadas, de acuerdo con el escenario. 

              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img22.png', alt='')

            .row.justify-content-center(titulo="Paso 2").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Priorización
                p Se debe priorizar en intervenir las vías de evacuación.

              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img23.png', alt='')

            .row.justify-content-center(titulo="Paso 3").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Delimita
                p Aplicando los cinco W+H: ¿qué? (#[i what?]): ¿vías de evacuación?; ¿por qué? (#[i why]?): no se coordinaron con el encargado de lugar los mecanismos de apertura de puertas; ¿cuándo? (#[i when]?): antes del desarrollo del ejercicio; ¿dónde? (#[i where]?): en la organización del simulacro; ¿quién? (#[i who]?): el encargado de la actividad y ¿cómo? (#[i how]?): la logística debió contemplar mecanismos de acceso y de salida de personas del lugar. 
                
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img24.png', alt='')


            .row.justify-content-center(titulo="Paso 4").pt-3
              .col-lg-7.mb-4.mb-lg-0
                h5 Identificar y analizar las causas 
                p De acuerdo con este contexto, se identifican las causas básicas, como falta de planeación y coordinación con los encargados del lugar, y las causas inmediatas, como no contar con mecanismos de apertura de emergencia instalados en el lugar donde se desarrolla la actividad, situación que podría generar estampidas, mayor número de lesionados y daños a la propiedad y a terceros.

              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img25.png', alt='')

            .row.justify-content-center(titulo="Paso 5").pt-3
              .col-lg-6.mb-4.mb-lg-0
                h5 Plan de mejora 
                p Aplicando el ciclo PHVA, se estructura el plan de mejora para controlar los aspectos negativos identificados.
                p De acuerdo con esto, se puede evidenciar que el plan de mejora se documenta para la situación que genera mayores efectos negativos sobre las personas, por esto se priorizan las vías de evacuación. Cabe resaltar que los demás aspectos también se deben contemplar y controlar, porque en emergencias todo es importante para prevenir daños a terceros.

              .col-lg-6.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img26.png', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
