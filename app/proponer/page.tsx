"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeCard } from "@/components/themes/theme-card";
import { Theme } from "@/lib/types";
import { useState } from "react";

// Mock user ID - In a real app, this would come from authentication
const MOCK_USER_ID = "user1";

export default function ProposePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  
  // Mock themes data - In a real app, this would come from your backend
  const [themes, setThemes] = useState<Theme[]>([
    {
      id: "1",
      title: "GraphQL vs REST en 2024",
      description: "Comparación de arquitecturas y casos de uso",
      author: "María García",
      tags: ["API", "Backend", "Arquitectura"],
      votes: 5,
      votedBy: ["user2", "user3"]
    },
    {
      id: "2",
      title: "Micro-frontends en la práctica",
      description: "Experiencias reales implementando arquitecturas distribuidas",
      author: "Carlos Ruiz",
      tags: ["Frontend", "Arquitectura", "Escalabilidad"],
      votes: 3,
      votedBy: ["user1"]
    }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTheme: Theme = {
      id: `theme-${Date.now()}`,
      title,
      description,
      author: "Usuario Actual", // In a real app, get from auth
      tags: tags.split(",").map(tag => tag.trim()),
      votes: 0,
      votedBy: []
    };

    setThemes(prev => [newTheme, ...prev]);
    
    // Reset form
    setTitle("");
    setDescription("");
    setTags("");
  };

  const handleVote = async (themeId: string) => {
    setThemes(prev => prev.map(theme => {
      if (theme.id === themeId && !theme.votedBy.includes(MOCK_USER_ID)) {
        return {
          ...theme,
          votes: theme.votes + 1,
          votedBy: [...theme.votedBy, MOCK_USER_ID]
        };
      }
      return theme;
    }));
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Proponer un Tema</h1>
        
        <Card className="p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título del Tema</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Escribe un título descriptivo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe brevemente tu propuesta..."
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Etiquetas (separadas por comas)</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="tecnología, innovación, desarrollo..."
              />
            </div>

            <Button type="submit" className="w-full">
              Enviar Propuesta
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Temas Propuestos</h2>
          {themes.map((theme) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              onVote={handleVote}
              hasVoted={theme.votedBy.includes(MOCK_USER_ID)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}