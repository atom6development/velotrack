import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) return setError("Informe e-mail e senha para entrar.");

    setError("");
    setIsSubmitting(true);
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center bg-background px-4 py-12">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Logo className="scale-125" />
          <div className="flex flex-col gap-1">
            <h1 className="text-heading-xs font-semibold text-heading">Central de Monitoramento</h1>
            <p className="text-sm text-muted">Entre com sua conta para acompanhar a frota.</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 shadow-xl"
        >
          <TextField
            id="email"
            label="E-mail"
            type="email"
            autoComplete="email"
            placeholder="voce@empresa.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Senha"
            type={isPasswordVisible ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            trailing={
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setIsPasswordVisible((visible) => !visible)}
                aria-label={isPasswordVisible ? "Ocultar senha" : "Mostrar senha"}
              >
                {isPasswordVisible ? (
                  <EyeSlash size={20} aria-hidden="true" />
                ) : (
                  <Eye size={20} aria-hidden="true" />
                )}
              </Button>
            }
          />

          {error && (
            <p role="alert" className="rounded-lg bg-danger/10 px-3 py-2.5 text-sm text-danger">
              {error}
            </p>
          )}

          <Button type="submit" disabled={isSubmitting} className="mt-2 w-full">
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <p className="text-center text-xs text-muted">
          Acesso de demonstração: operador@velotrack.demo · 123456
        </p>
      </div>
    </main>
  );
}
