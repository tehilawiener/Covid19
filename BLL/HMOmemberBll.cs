using DAL.Models;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class HMOmemberBll:IHMOmemberBll
    {
        DAL.IHMOmemberDal dal;

        public HMOmemberBll(IHMOmemberDal dal)
        {
            this.dal = dal;
        }

        public List<Hmomember> GetAllHMOmember() => dal.GetAllHMOmembers();
        public Boolean AddHMOmember(Hmomember hmomember) => dal.AddHMOmember(hmomember);

        public Hmomember GetHMOmemberById(string id) => dal.GetHmomemberById(id);
    }
}
