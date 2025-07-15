const Members = () => {
  return (
    <main className="space-y-6 p-4">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex items-center space-x-2">
          <button
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7"
            data-sidebar="trigger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-panel-left"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
            </svg>
            <span className="sr-only">Toggle Sidebar</span>
          </button>
          <h2 className="text-3xl font-bold tracking-tight">Membros</h2>
        </div>
        <button
          className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-_r_2q_"
          data-state="closed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-plus mr-2 h-4 w-4"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="19" x2="19" y1="8" y2="14"></line>
            <line x1="22" x2="16" y1="11" y2="11"></line>
          </svg>
          Convidar Membro
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Membros Ativos</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">2</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Convites Pendentes</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">2</div>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total de Membros</h3>
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">3</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Membros da Residência</h3>
            <p className="text-sm text-muted-foreground">Pessoas que têm acesso à gestão financeira</p>
          </div>
          <div className="p-6 pt-0">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Membro</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Função</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Status</th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-3">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                          <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="João Silva" />
                        </span>
                        <div>
                          <div className="font-medium">João Silva</div>
                          <div className="text-sm text-muted-foreground">joao@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-crown h-4 w-4 text-yellow-600"
                        >
                          <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                          <path d="M5 21h14"></path>
                        </svg>
                        <span className="capitalize">Administrador</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Ativo</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                      <button
                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-3">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                          <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="Maria Silva" />
                        </span>
                        <div>
                          <div className="font-medium">Maria Silva</div>
                          <div className="text-sm text-muted-foreground">maria@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-user h-4 w-4 text-gray-600"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="capitalize">Membro</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Ativo</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                      <button
                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-3">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                          <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" alt="Pedro Silva" />
                        </span>
                        <div>
                          <div className="font-medium">Pedro Silva</div>
                          <div className="text-sm text-muted-foreground">pedro@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-user h-4 w-4 text-gray-600"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="capitalize">Membro</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Pendente</div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                      <button
                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-2xs" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Convites Pendentes</h3>
            <p className="text-sm text-muted-foreground">Convites enviados aguardando resposta</p>
          </div>
          <div className="p-6 pt-0">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Email</th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Enviado em</th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail h-4 w-4 text-muted-foreground"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span>ana@email.com</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">10/01/2024</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                      <button
                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail h-4 w-4 text-muted-foreground"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span>carlos@email.com</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">12/01/2024</td>
                    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                      <button
                        className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-ellipsis h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Members;