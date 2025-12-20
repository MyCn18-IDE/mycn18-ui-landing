# REPOSITORIO: `mycn18-ui-landing`

## I. Descripción General del Proyecto (Contexto de MyCn18)

MyCn18 es una Plataforma de Desarrollo de Software No-Code/Low-Code universal y políglota, diseñada para soportar arquitecturas de microservicios de nivel empresarial. Su objetivo es permitir a los usuarios crear, versionar, probar y desplegar lógica de negocio en múltiples targets (Web, IoT, Data Science) a través de un editor visual. La arquitectura está diseñada para una escalabilidad masiva (millones de usuarios) y un ecosistema de Marketplace robusto.

-----

## II. Rol y Responsabilidad del Repositorio

- Este es el **Sitio Web Principal (Landing Page)** para el dominio Studio. Su rol es puramente de **Marketing, Adquisición de Usuarios y SEO**.
- **Funciones Clave:** **Velocidad de Carga Extrema** (Core Web Vitals), **Contenido Estático** y la funcionalidad de **Call to Action (CTA)** para el registro y el acceso al Studio.
- **Tipo de repo:** `UI` (Frontend de contenido estático).
- **Stack Sugerido:** **Astro**. Su arquitectura de *Islands* permite un HTML/CSS estático ultrarrápido con **cero JavaScript** por defecto, usando React solo para componentes interactivos clave. Esto asegura la máxima puntuación de SEO.
- **Meta Final:** Archivos Estáticos (`.html`, `.css`, `.js` mínimo) listos para ser servidos por una CDN.

-----

## III. Licenciamiento y Dependencias

- **Licencia del Código:** MIT
- **Servicios que Consume (Dependencias Críticas):**
  - **Ninguno directo** (es estático).
  - **APIs indirectas:** Un componente React de registro podría consumir el endpoint de `Sign Up` de `mycn18-core-full-iam`.
- **Servicios que Alimenta (Salidas):**
  - Ninguno. Su única salida es redirigir al usuario al `mycn18-studio-ui-flows`.

-----

## IV. Plan de Desarrollo y Visión (Visión 1.0)

El objetivo de la Visión 1.0 es tener una *landing page* de alto impacto que comunique la propuesta de valor de MyCn18 y dirija a los usuarios al registro.

1. **Máxima Velocidad:** Lograr una puntuación de rendimiento de 95+ en Core Web Vitals (Lighthouse).
2. **Estructura de Contenido:** Implementar las secciones clave (Propuesta de Valor, Características, Testimonios, CTA).
3. **Formulario de Registro:** Implementar el componente de *Sign Up* interactivo usando una isla de React.
4. **SEO Robusto:** Configurar *sitemaps*, metatags y esquema JSON-LD para los motores de búsqueda.

-----

## V. Plan de Iteraciones Iniciales (MVP)

| Task | Subtasks |
| :--- | :--- |
| **Configuración de Astro y Estilos Globales.** | \* Inicializar el proyecto con **Astro** y configurar Tailwind CSS/otro sistema de estilos. \* Desarrollar el *layout* principal (Header, Footer). \* Configurar los ajustes de *bundling* de Astro para la optimización máxima de imagen y código. |
| **Implementación del Contenido Estático y SEO.** | \* Crear la sección Hero y la sección de *Features* (como HTML/Markdown puro). \* Implementar los metatags de SEO, Títulos de página y *Social Shares* (Open Graph). |
| **Desarrollo de la Isla de React (CTA).** | \* Crear un componente React para el formulario de **Registro/Login**. \* Configurar el componente para que solo se hidrate en el navegador (*client:only* en Astro). \* Conectar el formulario a la API de registro del `core-full-iam`. |
