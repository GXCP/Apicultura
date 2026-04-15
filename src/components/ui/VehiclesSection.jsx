import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const VEHICLES = [
  {
    name: "Saveiro Robust",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/c490462e9_image.png",
    specs: [
      "Carenagem em fibra sem junções",
      "02 mesas em aço cirúrgico",
      "Mesa superior removível",
      "Interior em Gel Coat Lavável",
      "Iluminação interna com leds",
      "Vidros temperados 6mm fumê",
      "Sensores de ré",
    ],
  },
  {
    name: "Strada Freedom & Endurance",
    img: "https://media.base44.com/images/public/69dad00807a15d69135e28f4/02c4fa5f0_image.png",
    specs: [
      "Carenagem em fibra sem junções",
      "02 mesas em aço cirúrgico",
      "Mesa superior removível",
      "Interior em Gel Coat Lavável",
      "Iluminação interna com leds",
      "Vidros temperados 6mm fumê",
      "Sensores de ré",
      "Opção de grade frontal modificada",
    ],
  },
