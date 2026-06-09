# ST Soluciones Tecnológicas — Mesa de Ayuda / Gestión de Tickets

Aplicación web para la gestión de tickets de soporte técnico, con autenticación
por roles (clientes, mesa de ayuda, técnicos, líder técnico, coordinador y
administración de ventas).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **MongoDB** con **Mongoose** (modelos `User` y `Ticket`)
- Autenticación propia con **JWT** (`jose`) + **bcryptjs**, sesión en cookie `httpOnly`
- **Tailwind CSS v4** + componentes shadcn
- Datos en cliente con **SWR**

---

## 1. Requisitos previos

- **Node.js 18.18+** (recomendado Node 20 o 22)
- **pnpm** (el repo usa `pnpm-lock.yaml`). Instálalo con: `npm install -g pnpm`
- Una base de datos **MongoDB**. Dos opciones:
  - **Local**: tener `mongod` corriendo, o levantarlo con Docker (ver abajo).
  - **Nube**: una base gratuita en [MongoDB Atlas](https://www.mongodb.com/atlas).

---

## 2. Configurar variables de entorno

Copia el archivo de ejemplo y rellénalo:

```bash
cp .env.example .env.local
```

Variables necesarias en `.env.local`:

| Variable      | Descripción                                              |
| ------------- | -------------------------------------------------------- |
| `MONGODB_URI` | Cadena de conexión a MongoDB.                            |
| `JWT_SECRET`  | Secreto para firmar las sesiones. Genera uno aleatorio.  |

Genera un `JWT_SECRET` seguro con:

```bash
openssl rand -base64 32
```

---

## 3. (Opcional) Levantar MongoDB local con Docker

Si no tienes MongoDB instalado, lo más rápido es Docker:

```bash
docker run -d --name st-mongo -p 27017:27017 mongo:7
```

Con esto, en `.env.local` usa:

```
MONGODB_URI=mongodb://localhost:27017/st-soluciones
```

---

## 4. Instalar dependencias y arrancar

```bash
pnpm install
pnpm dev
```

La app queda disponible en **http://localhost:3000**.

---

## 5. Sembrar cuentas de prueba (seed)

El proyecto incluye un endpoint para crear las cuentas del personal interno.
Con el servidor corriendo, ejecuta en otra terminal:

```bash
curl -X POST http://localhost:3000/api/seed
```

Esto crea las siguientes cuentas (todas con la contraseña **`demo1234`**):

| Nombre           | Email             | Rol            |
| ---------------- | ----------------- | -------------- |
| Blanca Cortés    | blanca@st.com     | Mesa de Ayuda  |
| Diana Díez       | diana@st.com      | Técnico Campo  |
| Pedro Romero     | pedro@st.com      | Líder Técnico  |
| Willinton Peña   | willinton@st.com  | Coordinador    |
| Carlos Méndez    | carlos@st.com     | Admin Ventas   |

> El seed es idempotente: solo crea las cuentas que falten.

Las cuentas de **cliente** se crean desde la página de registro (`/register`).

---

## 6. Scripts disponibles

| Comando       | Descripción                          |
| ------------- | ------------------------------------ |
| `pnpm dev`    | Servidor de desarrollo (con HMR).    |
| `pnpm build`  | Compilación de producción.           |
| `pnpm start`  | Sirve la build de producción.        |
| `pnpm lint`   | Linter.                              |

---

## Estructura principal

```
app/
  api/            # Rutas de API (auth, tickets, users, seed)
  dashboard/      # Panel privado (lista y detalle de tickets)
  login/          # Inicio de sesión
  register/       # Registro de clientes
lib/              # auth, conexión a DB, roles, helpers
models/           # Esquemas de Mongoose (User, Ticket)
components/       # Componentes de UI
```
