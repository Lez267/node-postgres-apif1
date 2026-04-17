--
-- PostgreSQL database dump
--

\restrict OkV2TZUrxt2ZvESpTOK1oYt851fZ48x2f5kA60AxecZa5hy5ofrDpQPHAi7arZu

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: PilotosF1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."PilotosF1" (
    id integer NOT NULL,
    nombre character varying(255),
    equipos character varying(255),
    numeros character varying(255),
    nacionalidad character varying(255),
    victorias integer,
    podios integer,
    campeonatos integer,
    debut timestamp with time zone,
    puntos_totales integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    imagen character varying(500)
);


ALTER TABLE public."PilotosF1" OWNER TO postgres;

--
-- Name: PilotosF1_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."PilotosF1_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PilotosF1_id_seq" OWNER TO postgres;

--
-- Name: PilotosF1_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."PilotosF1_id_seq" OWNED BY public."PilotosF1".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: PilotosF1 id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PilotosF1" ALTER COLUMN id SET DEFAULT nextval('public."PilotosF1_id_seq"'::regclass);


--
-- Data for Name: PilotosF1; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."PilotosF1" (id, nombre, equipos, numeros, nacionalidad, victorias, podios, campeonatos, debut, puntos_totales, "createdAt", "updatedAt", imagen) FROM stdin;
4	Sergio Michel Pérez Mendoza	Sauber, McLaren, Racing Point, Red Bull	11	Mexicana	3	21	0	2011-03-26 18:00:00-06	640	2026-03-16 22:24:20.929-06	2026-03-16 22:24:20.929-06	\N
5	Oscar Jack Piastri	McLaren Formula 1 Team	81	Australiana	2	10	0	2023-03-04 18:00:00-06	389	2026-03-16 22:27:05.074-06	2026-03-16 22:27:05.074-06	\N
6	Lando Norris	McLaren Formula 1 Team	4	Británica	4	26	0	2018-03-24 18:00:00-06	1007	2026-03-16 22:27:14.447-06	2026-03-16 22:27:14.447-06	\N
7	Liam Lawson	Oracle Red Bull Racing	30	Neozelandés	0	0	0	2025-08-24 18:00:00-06	12	2026-03-16 22:30:52.243-06	2026-03-16 22:30:52.243-06	\N
8	George William Russell	Mercedes‑AMG Petronas F1 Team	63	Británica	0	12	0	2019-03-16 18:00:00-06	500	2026-03-16 22:31:29.757-06	2026-03-16 22:31:29.757-06	\N
9	Andrea Kimi Antonelli	Mercedes‑AMG Petronas F1 Team	12	Italiana	1	3	0	2025-03-12 18:00:00-06	63	2026-03-16 22:32:22.819-06	2026-03-16 22:32:22.819-06	\N
10	Fernando Alonso Días	Aston Martin Aramco F1 Team	14	Española	32	97	2	2001-03-03 18:00:00-06	2263	2026-03-16 22:32:39.98-06	2026-03-16 22:32:39.98-06	\N
11	Lance Strulovitch	Aston Martin Aramco F1 Team	18	Canadiense	0	4	0	2017-03-25 18:00:00-06	120	2026-03-16 22:33:19.131-06	2026-03-16 22:33:19.131-06	\N
12	Pierre Jean-Jacques Gasly	BWT Alpine F1 Team	10	Francesa	1	9	0	2017-03-25 18:00:00-06	150	2026-03-16 22:33:31.492-06	2026-03-16 22:33:31.492-06	\N
13	Jack Doohan	BWT Alpine F1 Team	7	Australiana	0	0	0	2022-10-27 19:00:00-05	0	2026-03-16 22:36:15.424-06	2026-03-16 22:36:15.424-06	\N
14	Esteban José Jean-Pierre Ocon-Khelfane	Haas F1 Team	31	Francesa	0	1	0	2016-03-26 18:00:00-06	245	2026-03-16 22:36:40.41-06	2026-03-16 22:36:40.41-06	\N
15	Oliver James Bearman	Haas F1 Team	87	Británica	0	2	0	2024-03-09 00:00:00-06	41	2026-03-16 22:37:17.182-06	2026-03-16 22:37:17.182-06	\N
16	Alexander Albon Ansusinha	Williams Racing	23	Tailandés	0	1	0	2019-03-16 18:00:00-06	73	2026-03-16 22:37:27.595-06	2026-03-16 22:37:27.595-06	\N
17	Carlos Sainz Vázquez de Castro Cenamor Rincón Rebollo Birto Moreno de Aranda de Anteruriaga Tiapera Deltún	Toro Rosso, Renault, McLaren, Ferrari	55	Española	4	29	0	2015-03-14 18:00:00-06	1200	2026-03-16 22:41:08.649-06	2026-03-16 22:41:08.649-06	\N
18	Nicolas Hülkenberg	Kick Sauber	27	Alemana	0	1	0	2010-03-13 18:00:00-06	626	2026-03-16 22:42:03.933-06	2026-03-16 22:42:03.933-06	\N
19	Gabriel Bortoleto Oliveira	Kick Sauber, Audi Revolut F1 Team	5	Brasilera	0	0	0	2025-03-15 18:00:00-06	4	2026-03-16 22:42:55.992-06	2026-03-16 22:45:10.509-06	\N
1	Maxiiiii	rb	11.33	british	11	11	11	2006-07-25 19:00:00-05	11	2026-03-16 22:19:34.824-06	2026-04-16 23:27:47.566-06	https://res.cloudinary.com/doce00zx3/image/upload/v1776397397/kj48tuwu7ut1wkexnzmo.jpg
2	Lewis Carl Davidson Hamilton	McLaren, Mercedes	44	Británica	103	191	7	2007-03-17 18:00:00-06	4305	2026-03-16 22:23:01.458-06	2026-04-16 23:46:05.569-06	https://res.cloudinary.com/doce00zx3/image/upload/v1776404765/w1isshaayzb9a0owmb1q.jpg
3	Charles Marc Hervé Perceval Leclerc	Sauber, Ferrari	16	Monegasca	5	23	0	2018-03-24 18:00:00-06	508	2026-03-16 22:23:52.131-06	2026-04-17 00:23:29.608-06	\N
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20260317033126-create-pilotos-f-1.js
\.


--
-- Name: PilotosF1_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."PilotosF1_id_seq"', 22, true);


--
-- Name: PilotosF1 PilotosF1_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."PilotosF1"
    ADD CONSTRAINT "PilotosF1_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- PostgreSQL database dump complete
--

\unrestrict OkV2TZUrxt2ZvESpTOK1oYt851fZ48x2f5kA60AxecZa5hy5ofrDpQPHAi7arZu

