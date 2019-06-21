using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessWeb.Entity
{
    public class Score
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string OrgName { get; set; }

        public string OrgId { get; set; }
    }
}
