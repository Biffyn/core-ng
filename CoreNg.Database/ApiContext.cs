using CoreNg.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CoreNg.Database
{
    public class ApiContext : DbContext, IApiContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

    }
}
