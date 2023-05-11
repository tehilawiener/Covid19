using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IHMOmemberDal
    {
        public List<Hmomember> GetAllHMOmembers();
        public Boolean AddHMOmember(Hmomember newHmomember);
        public Hmomember GetHmomemberById(string id);


    }
}
