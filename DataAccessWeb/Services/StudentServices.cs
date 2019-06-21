using DataAccessWeb.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessWeb.Services
{
    public class StudentServices
    {
        private readonly ServiceDbContext _db;

        public StudentServices(ServiceDbContext db)
        {
            this._db = db;
        }

        public async Task<IList<Score>> GetAllScoresAsync()
        {
            var result = await this._db.Scores.ToListAsync();
            return result;
        }
    }
}
