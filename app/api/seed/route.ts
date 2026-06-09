import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import User from "@/models/User"
import { hashPassword } from "@/lib/auth"
import { ROLES } from "@/lib/roles"

// Crea las cuentas del personal interno de ST Soluciones Tecnológicas.
// Idempotente: solo crea las que falten. Contraseña por defecto: "demo1234".
const STAFF = [
  { name: "Blanca Cortés", email: "blanca@st.com", role: ROLES.MESA_AYUDA },
  { name: "Diana Díez", email: "diana@st.com", role: ROLES.TECNICO_CAMPO },
  { name: "Pedro Romero", email: "pedro@st.com", role: ROLES.LIDER_TECNICO },
  { name: "Willinton Peña", email: "willinton@st.com", role: ROLES.COORDINADOR },
  { name: "Carlos Méndez", email: "carlos@st.com", role: ROLES.ADMIN_VENTAS },
]

async function seedStaff() {
  await dbConnect()
  const passwordHash = await hashPassword("demo1234")
  const created: string[] = []

  for (const member of STAFF) {
    const exists = await User.findOne({ email: member.email })
    if (!exists) {
      await User.create({
        name: member.name,
        email: member.email,
        passwordHash,
        role: member.role,
        acceptedTerms: true,
        acceptedTermsAt: new Date(),
      })
      created.push(member.email)
    }
  }

  return NextResponse.json({
    message:
      created.length > 0
        ? `Cuentas internas creadas. Contraseña: demo1234`
        : "Las cuentas internas ya existían.",
    created,
  })
}

export async function POST() {
  try {
    return await seedStaff()
  } catch (error) {
    console.log("[v0] Error en seed:", error instanceof Error ? error.message : error)
    return NextResponse.json({ error: "Error al sembrar cuentas." }, { status: 500 })
  }
}

// Conveniencia para desarrollo: permite sembrar visitando la URL en el navegador.
// Deshabilitado en producción para no exponer la creación de cuentas internas.
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Usa POST para sembrar las cuentas internas en producción." },
      { status: 405 },
    )
  }

  try {
    return await seedStaff()
  } catch (error) {
    console.log("[v0] Error en seed:", error instanceof Error ? error.message : error)
    return NextResponse.json({ error: "Error al sembrar cuentas." }, { status: 500 })
  }
}
