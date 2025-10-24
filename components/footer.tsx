import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Victor Store</h3>
            <p className="text-muted-foreground text-sm">
              Tu tienda de confianza para los mejores zapatos deportivos y casuales.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@victorstore.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Calle Principal, Ciudad</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horario</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Lunes - Viernes: 9:00 AM - 8:00 PM</p>
              <p>Sábado: 10:00 AM - 6:00 PM</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Victor Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
