"use client";

import { OpenSpaceEvent } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  event: OpenSpaceEvent;
}

export function EventCard({ event }: EventCardProps) {
  const statusColors = {
    draft: "bg-yellow-100 text-yellow-800",
    published: "bg-green-100 text-green-800",
    completed: "bg-gray-100 text-gray-800"
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{event.name}</h3>
        <Badge variant="secondary" className={statusColors[event.status]}>
          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
        </Badge>
      </div>

      <p className="text-muted-foreground mb-6 line-clamp-2">
        {event.description}
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{new Date(event.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>Máx. {event.maxParticipants} participantes</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Link href={`/admin/events/${event.id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            Gestionar
          </Button>
        </Link>
        <Link href={`/admin/events/${event.id}/edit`} className="flex-1">
          <Button className="w-full">
            Editar
          </Button>
        </Link>
      </div>
    </Card>
  );
}