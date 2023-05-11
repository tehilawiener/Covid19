using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
namespace BLL
{
    public interface IHMOmemberBll
    {
        public List<Hmomember> GetAllHMOmember();
        public Boolean AddHMOmember(Hmomember hmomember);
        public Hmomember GetHMOmemberById(string id);
    }
}
