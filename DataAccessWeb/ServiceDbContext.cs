using DataAccessWeb.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessWeb
{
    public class ServiceDbContext : DbContext
    {
        public ServiceDbContext()
        { }

        public ServiceDbContext(DbContextOptions<ServiceDbContext> options) : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { }

        public virtual DbSet<Score> Scores { get; set; }
    }
}
