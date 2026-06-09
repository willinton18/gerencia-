"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface TermsDialogProps {
  open: boolean
  onClose: () => void
  onAccept?: () => void
}

export function TermsDialog({ open, onClose, onAccept }: TermsDialogProps) {
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/50"
      />

      <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-border bg-card shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b border-border p-5">
          <div>
            <h2 id="terms-title" className="text-lg font-bold text-card-foreground">
              Términos y Condiciones de Prestación de Servicios Tecnológicos
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              ST Soluciones — Soluciones Tecnológicas
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col gap-5 overflow-y-auto p-5 text-sm leading-relaxed text-foreground">
          <p>
            Bienvenido a <strong>ST Soluciones</strong>. El presente documento contiene los Términos
            y Condiciones Generales (en adelante, los &quot;Términos&quot;) que rigen la relación
            contractual, el acceso y el uso de los servicios de soporte técnico, mantenimiento
            preventivo, soporte remoto y presencial, y toda la ayuda prestada por ST Soluciones (en
            adelante, la &quot;Empresa&quot;), a favor de sus clientes (en adelante, el &quot;Usuario&quot;
            o &quot;Cliente&quot;), ya correspondan a personas independientes, emprendimientos,
            empresas o instituciones educativas.
          </p>
          <p>
            <strong>Línea de servicio:</strong> Al presionar el botón &quot;Aceptar&quot;, diligenciar
            el formulario de solicitud de soporte, aceptar una cotización técnica o registrar un
            tiquete en nuestro software de Help Desk, el Cliente manifiesta su consentimiento expreso
            e informado para obligarse bajo la totalidad de las cláusulas aquí descritas.
          </p>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">1. Identificación de las partes</h3>
            <p>
              El presente contrato de adhesión digital se celebra, por una parte, por ST Soluciones,
              marca comercial bajo la cual opera la organización transaccional orientada al diseño y
              ejecución de infraestructuras lógicas, mantenimiento y soporte TI; y por la otra, el
              Usuario o Cliente que acepte los presentes Términos. <em>Fundamento legal:</em> Artículo
              1502 del Código Civil Colombiano y Ley 527 de 1999 (equivalencia funcional de los
              mensajes de datos y la firma electrónica).
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">2. Objeto del contrato</h3>
            <p>
              El objeto consiste en otorgar acceso regulado y profesional al portafolio de servicios
              integrales de soporte técnico de ST Soluciones, impulsando la productividad tecnológica
              del Cliente mediante: <strong>Soporte Nivel 1 (Mesa de Ayuda)</strong> — gestión técnica
              remota de incidencias básicas, operada por Blanca Cortés; <strong>Soporte Nivel 2
              (Presencial / Campo)</strong> — soporte de hardware físico a cargo de la técnica Diana
              Díez; y <strong>Soporte Nivel 3 (Líder Técnico)</strong> — diagnóstico avanzado de redes,
              infraestructura y servidores lógicos, a cargo del Líder Técnico Pedro Romero.{" "}
              <em>Fundamento legal:</em> Artículos 1517 y 1518 del Código Civil Colombiano.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">3. Tipo de licencia y uso del software de ticketing</h3>
            <p>
              Para la correcta gestión de los requerimientos, la Empresa concede al Cliente un derecho
              de uso exclusivo, personal, revocable, no exclusivo y estrictamente intransferible sobre
              las interfaces y plataformas del software de Help Desk suministradas. Queda prohibida la
              reproducción total o parcial, ingeniería inversa o su explotación no autorizada.{" "}
              <em>Fundamento legal:</em> Ley 23 de 1982 (Régimen de Derechos de Autor) y Decisión 351
              de la Comunidad Andina de Naciones.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">4. Condiciones de uso y obligaciones del cliente</h3>
            <p>
              El Cliente se obliga a hacer uso de los servicios de conformidad con la ley y la buena fe
              contractual. Queda estrictamente prohibido: suministrar información falsa o errónea sobre
              el estado, marcas, licencias o procedencia del hardware; utilizar las plataformas
              informáticas para reportar falsas incidencias o emplear herramientas automatizadas de
              saturación de tiquetes; y manipular físicamente los componentes internos de los equipos
              de cómputo mientras se encuentre en ejecución un diagnóstico técnico sin autorización
              expresa del Coordinador de Operaciones, Willinton Peña. <em>Fundamento legal:</em> Ley
              1273 de 2009 (Estatuto de protección de la información y los datos).
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">5. Propiedad intelectual</h3>
            <p>
              ST Soluciones retiene la titularidad exclusiva, total y absoluta de todos los derechos de
              propiedad intelectual e industrial relacionados con sus marcas, eslóganes oficiales
              (incluyendo la frase comercial &quot;Impulsando tu productividad, asegurando tu
              tecnología&quot;), logotipos, interfaces de portales de soporte, metodologías de tiquetes,
              informes de cierre estructurados y bases de datos predictivas del rendimiento del
              hardware. <em>Fundamento legal:</em> Decisión 486 de la Comunidad Andina de Naciones y el
              Código de Comercio de Colombia.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">6. Privacidad, datos personales y confidencialidad</h3>
            <p>
              El personal operativo de ST Soluciones podrá tener acceso tangencial o efectivo a los
              sistemas informáticos, discos duros y redes del Cliente. La Empresa se compromete a
              tratar la información corporativa y personal recopilada con el fin exclusivo de registrar
              y solucionar la incidencia en la mesa de ayuda. El Cliente autoriza de manera previa,
              libre e informada el tratamiento de sus datos de contacto y organización con el fin de
              gestionar el cobro del servicio (área de Administración y Ventas liderada por Carlos
              Méndez) y evaluar la calidad del servicio recibido. <em>Fundamento legal:</em> Ley
              Estatutaria 1581 de 2012, Decreto Reglamentario 1377 de 2013 y Artículo 15 de la
              Constitución Política de Colombia (Habeas Data).
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">7. Limitación de responsabilidad y eximentes</h3>
            <p>
              ST Soluciones ejecuta sus planes de mantenimiento preventivo y correctivo siguiendo la
              más alta fidelidad técnica. No obstante, la Empresa no se hace responsable civil o
              penalmente por: la pérdida fortuita de datos de usuario en discos magnéticos o de estado
              sólido que no cuenten con copias de seguridad (backup) previas y ejecutadas por el Cliente
              antes de la intervención técnica; fallas tecnológicas derivadas de la inestabilidad de la
              conectividad e internet que pertenezcan a los proveedores (ISP) durante sesiones de
              soporte remoto; y daños lógicos o físicos ocasionados por variaciones eléctricas,
              obsolescencia súbita del hardware del cliente o manipulación del equipo no autorizada tras
              el informe de cierre. <em>Fundamento legal:</em> Artículo 1616 del Código Civil y Artículo
              16 de la Ley 1480 de 2011.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">8. Garantías y acuerdos de niveles de servicio (SLA)</h3>
            <p>
              La Empresa garantiza la idoneidad, seguridad y calidad de los servicios prestados de
              acuerdo con la clasificación operativa de riesgos e incidentes establecida internamente
              por el Coordinador de Operaciones. El cumplimiento de los Acuerdos de Niveles de Servicio
              (SLA) para respuestas iniciales y diagnósticos se estructurará contractualmente de
              conformidad con las cotizaciones formalizadas. En concordancia con las leyes vigentes, la
              garantía legal cubre defectos exclusivos en la mano de obra del soporte correctivo por un
              período estandarizado de treinta (30) días calendario contados a partir de la firma del
              Informe de Cierre de Incidencia. <em>Fundamento legal:</em> Artículos 7 al 16 de la Ley
              1480 de 2011 (Estatuto del Consumidor).
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">9. Vigencia y terminación del contrato</h3>
            <p>
              El presente contrato de soporte técnico bajo la modalidad de demanda o bolsa de tiquetes
              posee una vigencia inicial indefinida, sujeta al agotamiento de las horas o servicios
              cotizados. Cualquiera de las partes podrá dar por terminado el vínculo contractual de mutuo
              acuerdo. La Empresa se reserva la facultad jurídica de suspender de forma preventiva o
              cancelar de forma definitiva el acceso del Cliente a los canales de soporte y mesa de ayuda
              por las siguientes causales de justa terminación: el impago o mora superior a quince (15)
              días calendario en las facturas de servicios aprobadas y emitidas por el área de
              administración; maltrato o faltas de respeto verbales hacia los agentes técnicos de Nivel
              1, 2 o 3 de la Empresa; y el uso indebido de la infraestructura para desplegar conductas
              que pongan en riesgo la seguridad informática nacional o regional. <em>Fundamento legal:</em>{" "}
              Artículo 1602 del Código Civil de Colombia.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">10. Modificaciones unilaterales al contrato</h3>
            <p>
              ST Soluciones se reserva el derecho de modificar o actualizar de forma parcial o total las
              condiciones operativas y comerciales del presente documento para ajustarse a los cambios
              tecnológicos, de infraestructura de Help Desk o modificaciones normativas en Colombia. Los
              cambios sustanciales sobre los precios o las condiciones de las garantías serán notificados
              al correo electrónico registrado por el Cliente con una antelación mínima de diez (10) días
              hábiles a su entrada en vigencia, valiéndose su aceptación digital expresa en el portal para
              continuar con la ejecución de nuevos servicios. <em>Fundamento legal:</em> Ley 1480 de 2011.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">11. Legislación aplicable y jurisdicción</h3>
            <p>
              Las cláusulas del presente contrato, su interpretación, su ejecución técnica y resolución
              de tensiones jurídicas derivadas se rigen de forma exclusiva y excluyente por el
              ordenamiento jurídico, sustancial y procesal de la República de Colombia. Las partes
              declaran fijar su residencia contractual y competencia territorial preferente bajo los
              despachos judiciales competentes de su zona o región administrativa. <em>Fundamento
              legal:</em> Código General del Proceso de Colombia.
            </p>
          </section>

          <section className="flex flex-col gap-1.5">
            <h3 className="font-semibold text-card-foreground">12. Mecanismos de resolución de conflictos</h3>
            <p>
              Ante cualquier discrepancia, reclamación o inconformidad surgida respecto de la
              liquidación, horas técnicas, fallas de diagnóstico o la ejecución de garantías, el Cliente
              y la Empresa se obligan a agotar la siguiente escala obligatoria de resolución:{" "}
              <strong>Reclamación directa</strong> — el Cliente deberá radicar por escrito el reclamo
              ante el Coordinador de Operaciones en un plazo máximo de quince (15) días hábiles;{" "}
              <strong>conciliación extrajudicial</strong> — si la reclamación directa no prospera, las
              partes acudirán de mutuo acuerdo ante un Centro de Conciliación legalmente constituido; y{" "}
              <strong>vía jurisdiccional</strong> — agotados los pasos previos, las partes quedan
              facultadas para interponer demandas de protección al consumidor ante la Delegatura para
              Asuntos Jurisdiccionales de la Superintendencia de Industria y Comercio (SIC).{" "}
              <em>Fundamento legal:</em> Ley 1563 de 2012 (Estatuto de Arbitraje Nacional e
              Internacional) y Artículo 56 de la Ley 1480 de 2011.
            </p>
          </section>
        </div>

        <div className="flex justify-end gap-3 border-t border-border p-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Cerrar
          </button>
          {onAccept && (
            <button
              type="button"
              onClick={onAccept}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Aceptar términos
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
