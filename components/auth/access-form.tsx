"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { OpenSpaceAccess } from "@/lib/types";
import Link from "next/link";

interface AccessFormProps {
  onAccess: (data: OpenSpaceAccess) => void;
}

export function AccessForm({ onAccess }: AccessFormProps) {
  const [spaceId, setSpaceId] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAccess({ spaceId, username });
  };

  return (
    <Card className="w-full max-w-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="spaceId">Open Space ID</Label>
          <Input
            id="spaceId"
            type="text"
            value={spaceId}
            onChange={(e) => setSpaceId(e.target.value)}
            placeholder="Ingresa el ID del Open Space"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="username">Nombre de Usuario</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full">
            Acceder
          </Button>
          
          <div className="text-center">
            <span className="text-sm text-muted-foreground">¿Eres administrador? </span>
            <Link href="/admin/login" className="text-sm text-primary hover:underline">
              Acceder al Backoffice
            </Link>
          </div>
        </div>
      </form>
    </Card>
  );
}