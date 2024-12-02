"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAccess } from "@/lib/context/access-context";

export default function NewEventPage() {
  const router = useRouter();
  const { access } = useAccess();

  useEffect(() => {
    if (!access?.isAdmin) {
      router.push("/admin/login");
    }
  }, [access, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save to backend
    router.push("/admin/dashboard");
  };

  if (!access?.isAdmin) {
    return null;
  }

  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Crear Nuevo Open Space</h1>
        
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Evento</Label>
              <Input
                id="name"
                placeholder="Ej: Tech Innovation Summit 2024"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                placeholder="Describe el propósito y objetivos del evento..."
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Fecha</Label>
                <Input
                  id="date"
                  type="date"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input
                  id="location"
                  placeholder="Ej: Madrid"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxParticipants">Número Máximo de Participantes</Label>
              <Input
                id="maxParticipants"
                type="number"
                min="1"
                placeholder="100"
                required
              />
            </div>

            <div className="flex gap-4 justify-end">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button type="submit">
                Crear Evento
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
}