"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Open Space Technology
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where innovation meets collaboration. Join us in shaping discussions that matter through participant-driven conversations and knowledge sharing.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/proponer">
              <Button size="lg" className="gap-2">
                Proponer Tema
              </Button>
            </Link>
            <Link href="/agenda">
              <Button size="lg" variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Ver Agenda
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Principios del Open Space</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quien sea que venga es la persona correcta",
                description: "Los participantes más apasionados son los que hacen la diferencia."
              },
              {
                title: "Lo que suceda es lo único que podría haber sucedido",
                description: "Mantén la mente abierta y aprovecha cada momento."
              },
              {
                title: "Cuando empieza es el momento correcto",
                description: "La creatividad no sigue un horario estricto."
              },
              {
                title: "Cuando termina, termina",
                description: "Respeta el flujo natural de las conversaciones."
              }
            ].map((rule, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{rule.title}</h3>
                <p className="text-muted-foreground">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para participar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a nosotros en esta experiencia única de aprendizaje colaborativo y networking.
          </p>
          <Link href="/proponer">
            <Button size="lg">Proponer un Tema</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}