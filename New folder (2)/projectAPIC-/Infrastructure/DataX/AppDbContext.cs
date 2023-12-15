using Design.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.DataX
{
    public class AppDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost;Integrated Security=true;Initial Catalog=ListAccMetamask;MultipleActiveResultSets=True;encrypt=true;trustservercertificate=true");
        }
        public DbSet<ListAcc> listAccs { get; set; }
    }
}
