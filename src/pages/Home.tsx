import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Separator } from '@/components/ui/separator'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import helmetBro from '../assets/astronaut-helmet-bro.svg'
import outerSpaceAmico from '../assets/outer-space-amico.svg'
import helmbetRafiki from '../assets/astronaut-helmet-rafiki.svg'

export default function Home() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-primary-foreground w-full h-full flex p-16">
        <Carousel className="w-full h-full">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rouended-lg p-8">
                <img src={helmetBro} alt="Capacete" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rouended-lg p-8">
                <img src={outerSpaceAmico} alt="Space" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex aspect-square bg-background rouended-lg p-8">
                <img src={helmbetRafiki} alt="Capacete 2" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-2xl font-semibold tracking-tighter">
            <CardTitle>Entre com sua Conta</CardTitle>
            <CardDescription>
              Utilize seu e-mail e senha ou Github para entrar.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="exemplo@email.com" type="email" />
            </div>

            <div className="mt-4">
              <Label htmlFor="senha">Senha</Label>
              <Input id="password" placeholder="sua senha" type="password" />
            </div>

            <Button className="mt-6 w-full">Entrar</Button>

            {/* Separador com texto */}
            <div className="flex items-center gap-4 my-6">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">
                ou entre com
              </span>
              <Separator className="flex-1" />
            </div>

            <Button variant="outline" className="w-full">
              <GitHubLogoIcon className="mr-2" />
              Entrar com o Github
            </Button>
          </CardContent>

          <CardFooter>
            <p className="text-muted-foreground text-center text-sm w-full">
              Ao entrar em nossa plataforma, você concorda com nossos termos de
              uso e Política de privacidade.
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  )
}
