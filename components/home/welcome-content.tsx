"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function WelcomeContent() {
  return (
    <>
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
    </>
  );
}