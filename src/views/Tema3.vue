<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Evaluación de resultados del plan de emergencias y contingencias 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        .bloque-texto-b.bloque-texto-recuadro3.p-4.mt-3.bloque-texto-width1
          .bloque-texto-b__texto
            p Recordemos que el plan de emergencias es el documento que llena requisitos legales, el cual debe ser documentado acorde a las condiciones específicas. Todos los planes de atención y gestión de desastres en su estructura son los mismos, pero la información contenida debe ser acorde a las condiciones en las que se ejecutará el evento, debe dar claridad en los procedimientos operativos normalizados, así como en los recursos que se requieren para la atención del suceso. Teniendo en cuenta la complejidad y los diferentes aspectos que recopila este documento, se debe evaluar su aplicación, adherencia y conocimiento; para ello, se aplica la evaluación de los planes de emergencia.  En el siguiente video se amplía la información sobre la definición de evaluación, sus componentes, listas de chequeo, criterios de evaluación y metodología.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')

    separador


    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            

    .row.mt-5
      p Para ampliar información sobre cada una de las temáticas abordadas en el video, se ponen a disposición los siguientes documentos:

    .row.justify-content-around.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-3.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 DOC - Anexo 1
                  p.text-small Listas de chequeo
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/ANEXO_1_Listas_chequeo.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    .row.justify-content-around.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-3.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 DOC - Anexo 2
                  p.text-small Formato de guion simulacros e instrumentos de evaluación
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/ANEXO_2_Simulacros.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download         

    .row.justify-content-around.align-items-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-3.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 XLS - Anexo 3
                  p.text-small Instrumento para la evaluación de planes de emergencia                                                                                                                                
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/ANEXO_3_Evaluacion_de_riesgos.xlsx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-4
        p #[b Criterios de evaluación]

        p Cada organización es autónoma de definir el criterio para establecer los rangos de cumplimiento, de acuerdo con la necesidad y características propias del evento. Los criterios de evaluación dependerán del instrumento utilizado, se sugiere que estos queden definidos y documentados en un procedimiento donde se establezcan las medidas de evaluación, la frecuencia y los criterios para determinar los cumplimientos.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='Texto que describa la imagen')

      .col-lg-4
        .bloque-texto-b.bloque-texto-recuadro2.p-4.mt-3.bloque-texto-width1
          .bloque-texto-b__texto
            p Generalmente, los criterios de evaluación se definen así: en las listas de chequeo se estandariza un porcentaje de cumplimiento con los criterios exigidos, este instrumento se utiliza principalmente cuando queremos definir el cumplimiento a manera general de los requisitos establecidos en un plan de emergencias; en las simulaciones o simulacro se diseña un guion de la actividad a emular, a partir de este guion se definen criterios de evaluación donde se delimita cuáles son los factores que  se determinarán, el cumplimiento principalmente. Se evalúan tiempos de evacuación, seguimiento de instrucciones, manejo de la emergencia, primeros auxilios y manejo de los recursos para atender emergencias, y por último, la autoevaluación del plan de gestión de riesgos de desastres.

    .row.mt-5
      p Para ello, la herramienta define los porcentajes de cumplimiento en cuanto a la intervención, protección financiera, preparación de respuesta y ejecución para la respuesta ante emergencias. Regularmente, se recomienda estandarizar porcentajes de cumplimiento así:

    .row.justify-content-around.align-items-center.mt-5.bgr1-tema3
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img4.svg', alt='Texto que describa la imagen')

      .col-lg-6
        ul.lista-ul--color
          li 
            i.fas.fa-chevron-right
            p.mb-0 Igual o mayor a 95 %: Excelente, mantener las acciones implementadas. 

          li 
            i.fas.fa-chevron-right
            p.mb-0 Entre 94 % a 85 %: Bueno, mantener las acciones; se pueden sugerir mejoras al proceso.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Entre 84 % a 66 %: Por mejorar, se deben implementar acciones correctivas para cumplir con los requisitos para atender emergencias. 

          li 
            i.fas.fa-chevron-right
            p.mb-0 Menor a 65 %: Crítico, no se cumple con los requisitos para ejecutar un plan de emergencias, se deben implementar acciones correctivas de manera prioritaria.

    .row.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
        .bloque-texto-g__img.bloque-texto-g__img2(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img5.png')})`}"
        )
        .bloque-texto-g__texto.p-4.bloque-texto-g__texto2
          p.mb-0 Es importante recordar que a partir de la evaluación del plan de emergencias y contingencias se deben documentar las acciones de mejora, siendo estas construidas con la participación de las personas que intervienen en la actividad; así mismo, que estas sean socializadas a las partes afectadas por el proceso, que sean acordes a los hallazgos y que puedan ser implementadas de manera oportuna.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema3/img6.svg', alt='Texto que describa la imagen')

      .col-lg-8
        p.mt-3 En conclusión, con la evaluación de los planes de emergencia, aplicando las herramientas vistas, como autoevaluación, simulacros, listas de verificación, entre otros, y definiendo unos criterios acordes y justificables a la necesidad de la organización, esta se convierte en la mejor herramienta para optimizar los recursos, mejorar la capacidad de respuesta y conocer a tiempo acciones que mitiguen el riesgo para la organización en el desarrollo de las actividades económicas.

        .bloque-texto-b.bloque-texto-recuadro.p-4.mt-3.bloque-texto-width1
          .bloque-texto-b__texto
            p Con el desarrollo de estos procesos se identifica oportunamente la pertinencia del  mismo, adherencia, conocimiento y cumplimiento  por parte de los integrantes del comité de emergencia a los procedimientos operativos normalizados, la coordinación y tiempos de respuesta  con entidades de ayuda externa y la definición de planes de mejora, recordando que una organización que tenga trazada la calidad en sus servicios contempla todos los aspectos y garantiza los recursos necesarios para la implementación de estas acciones, siempre en procura de la competitividad para las empresas.

</template>

<script>
export default {
  name: 'Tema3',
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
