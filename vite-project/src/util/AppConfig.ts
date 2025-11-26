class AppConfig{
    private readonly baseUrl = import.meta.env.VITE_API_URL;
    public readonly productsUrl = this.baseUrl + 'products'; 
}

export const appConfig = new AppConfig();